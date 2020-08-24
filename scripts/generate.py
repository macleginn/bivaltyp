import os
import json
import sys

import pandas as pd
import markdown2

from helpers import *

with open('../templates/base/base.html', 'r', encoding='utf-8') as inp:
    BASE_TEMPLATE = inp.read()
with open('../templates/partials/header.html', 'r', encoding='utf-8') as inp:
    HEADER_TEMPLATE = inp.read()
with open('../templates/partials/includes.html', 'r', encoding='utf-8') as inp:
    INCLUDES_TEMPLATE = inp.read()

SITE_URL = 'https://eurphon.info/static/bivaltyp'
# SITE_URL = 'file:///Users/macbook/Documents/Yandex.Disk/WorkInProgress/BivalTyp/webapp/public'
# SITE_URL = 'file:///C:/Users/dniko/PycharmProjects/bivaltyp/public'

# For not re-rendering unchanged pages.
if len(sys.argv) > 1 and sys.argv[1] == '-r':
    LAST_MODIFIED = {}
else:
    try:
        with open('last_modified.json', 'r') as inp:
            LAST_MODIFIED = json.load(inp)
    except:
        LAST_MODIFIED = {}


# Project specific data
URL_DICT = {
    'predicates': '{{ site_url_j }}/predicates/',
    'languages': '{{ site_url_j }}/languages/listview/',
    'questionnaire': '{{ site_url_j }}/questionnaire/',
    'patterns': '{{ site_url_j }}/data/patterns/',
    'all_data': '{{ site_url_j }}/data/all/',
    'download': '{{ site_url_j }}/download/',
    'how to read the data': '{{ site_url_j }}/howtoreadthedata/',
    'instructions_for_contributors': '{{ site_url_j }}/project/instructions/',
    'map_view': '{{ site_url_j }}/languages/mapview/'
}

DATA_DICT = {
    'site_url': '<a href="{{ site_url_j }}/">{{ site_url_j }}</a>',
    'today': '<span id="today"></span>',
    'version': '<span id="version"></span>',
    'last_database_release_year': '<span id="last-release-year"></span>'
}

# These fields must be looked up in the languages table
# using the file name as key.
LANGUAGE_FIELDS = {
    'data_collection_year',
    'consultant',
    'language_external',
    'initial_release_date',
    'last_release_date',
    'latitude',
    'longitude',
    'family_WALS',
    'genus_WALS',
    'macroarea_WALS'
}

# Load language meta data.
LANGUAGE_META = pd.read_csv('../data/languages.csv', sep='\t', skiprows=[1])
LANGUAGE_META.fillna('', inplace=True)
LANGUAGE_META.index = LANGUAGE_META.language
# LANGUAGE_META.data_collection_year = LANGUAGE_META.data_collection_year.map(lambda x: x if x == '' else int(x))
# print(LANGUAGE_META.index)
# print(LANGUAGE_META.columns)

LANG_DICT = {}
for tup in LANGUAGE_META.itertuples():
    LANG_DICT[tup.language_no] = tup.language
    LANG_DICT[tup.language] = tup.language_no

LANG_EXTERNAL = {
    tup.language: tup.language_external for tup in LANGUAGE_META.itertuples()
}
PHYLO_DICT = {
    tup.language: (tup.family_WALS, tup.genus_WALS) for tup in LANGUAGE_META.itertuples()
}

# Load the predicates. Some of the data is duplicated in patterns.csv.
# This should not be a problem.
PREDICATES = pd.read_csv('../data/predicates.csv', sep='\t')
PREDICATES.index = PREDICATES.predicate_no

# Load the golden-data.
GOLDEN_DATA = pd.read_csv('../data/data.csv', sep='\t')
GOLDEN_DATA.fillna('', inplace=True)

# Load the patterns
PATTERNS = pd.read_csv('../data/patterns.csv', sep='\t')
PATTERNS.fillna('', inplace=True)
PATTERNS.index = PATTERNS.predicate_no
PRED_DICT = {}
for tup in PATTERNS.itertuples():
    PRED_DICT[tup.predicate_no] = tup.predicate_label_en
    PRED_DICT[tup.predicate_label_en] = tup.predicate_no
PRED_W_HASH = {
    tup.predicate_label_en.replace('#', ''): tup.predicate_label_en
    for tup in PATTERNS.itertuples()
}


def lang_link(lang_name):
    a = ET.Element('a', attrib={
        'class': 'data-link',
        'href': '{{ site_url_j }}/languages/descriptions/' + lang_name + '.html'
    })
    a.text = LANG_EXTERNAL[lang_name]
    return a


def pred_link(tup):
    predicate_name = PATTERNS.loc[tup.predicate_no].predicate_label_en
    a = ET.Element('a', attrib={
        'class': 'data-link',
        'href': '{{ site_url_j }}/predicates/pred/' +
                predicate_name.replace('#', '') +
                '.html'
    })
    a.text = cleanup_predicate(predicate_name).strip()
    return a


def render_template(txt, language):
    """
    This function processes the project-specific
    template elements replacing them with hyperlinks
    and appropriate values.
    """
    hyperlink_pattern = re.compile(r'(\[(.+?)\])?\{\{(.+?)\}\}')
    replacement_dict = {}
    for hl in hyperlink_pattern.finditer(txt):
        key = hl.group(3).strip()
        # If group(2) is not None, this is a hyperlink with custom text.
        if hl.group(2) is not None:
            replacement_dict[
                hl.group(0)
            ] = f'<a href="{URL_DICT[key]}">{hl.group(2)}</a>'
        elif key in URL_DICT:
            replacement_dict[
                hl.group(0)
            ] = f'<a href="{URL_DICT[key]}">{key}</a>'
        elif key in DATA_DICT:
            replacement_dict[hl.group(0)] = DATA_DICT[key]
        elif key in LANGUAGE_FIELDS:
            if language is None:
                raise ValueError(
                    f'An unexpected language field on a non-language page: {key}')
            replacement_dict[
                hl.group(0)
            ] = str(LANGUAGE_META.loc[language][key])
    result = txt
    # Replace keys from longest to shortest
    # to obviate substring problems.
    tuples = sorted(replacement_dict.items(),
                    key=lambda x: len(x[0]), reverse=True)
    for k, v in tuples:
        result = result.replace(k, v)
    return result


def get_predicate_meta_table(tup):
    result = ET.Element('table')

    tr = ET.Element('tr')
    valency_pattern = ET.Element(
        'td', attrib={'class': 'predicate-info-table'})
    valpal_span = ET.Element('span', attrib={'class': 'b'})
    valpal_span.text = 'Valency pattern:'
    valpal_span2 = ET.Element('span')
    valpal_span2.text = tup.valency_pattern if tup.valency_pattern.strip() else 'NA'
    valency_pattern.append(valpal_span)
    valency_pattern.append(valpal_span2)
    tr.append(valency_pattern)

    result.append(tr)

    tr = ET.Element('tr')
    X = ET.Element('td', attrib={'class': 'predicate-info-table'})
    X.text = f'X: {tup.X}'
    tr.append(X)
    result.append(tr)

    tr = ET.Element('tr')
    Y = ET.Element('td', attrib={'class': 'predicate-info-table'})
    Y.text = f'Y: {tup.Y}'
    tr.append(Y)
    result.append(tr)

    tr = ET.Element('tr')
    locus = ET.Element('td', attrib={'class': 'predicate-info-table'})
    locus.text = f'Locus: {tup.locus}'
    tr.append(locus)
    result.append(tr)

    div_el = ET.Element('div', attrib={'class': 'example-info-div'})
    div_el.append(result)
    return div_el


def get_predicate_example_table(t):
    sent = t.sentence
    glos = t.glosses_en
    # A conservative way of rendering examples:
    # take the shorter array of words (sentence vs. glosses)
    # and construct a table based on it.
    result = ET.Element(
        'table', attrib={'class': 'example', 'cellspacing': '0'})
    sent_arr = sent.split()
    glos_arr = glos.split()
    ncol = min(len(sent_arr), len(glos_arr))
    sent_arr = sent.split(' ', ncol - 1)
    glos_arr = glos.split(' ', ncol - 1)

    sent_tr = ET.Element('tr')
    for word in sent_arr:
        td = ET.Element('td', attrib={'class': 'example-word'})
        td.text = word
        sent_tr.append(td)
    result.append(sent_tr)

    glos_tr = ET.Element('tr')
    for word in glos_arr:
        td = ET.Element('td', attrib={'class': 'example-gloss'})
        for span in cleanup_gloss(word):
            td.append(span)
        glos_tr.append(td)
    result.append(glos_tr)

    tran_tr = ET.Element('tr')
    tran_td = ET.Element('td', attrib={
        'colspan': str(ncol),
        'class': 'example-translation'
    })
    tran_td.text = t.back_translation_en
    tran_tr.append(tran_td)
    result.append(tran_tr)

    div_el = ET.Element('div', attrib={'class': 'example-info-div'})
    div_el.append(result)
    div_el.append(dom('p', classes='example-comment', text=t.comms))
    return div_el


def render_example(t):
    data_div = ET.Element('div', attrib={
        'class': 'predicate-info',
    })
    data_div.append(get_predicate_meta_table(t))
    data_div.append(get_predicate_example_table(t))
    return data_div


def render_example_header(t):
    p = ET.Element('p', attrib={'class': 'examples-header'})

    number = ET.Element('span')
    number.text = f'{t.predicate_no}. '

    predicate_name_link = pred_link(t)

    blank = ET.Element('span', attrib={'style': 'margin-left: 3px;'})
    blank.text = '('

    predicate_translation = ET.Element(
        'span', attrib={'class': 'predicate-translation'})
    predicate_translation.text = t.verb.strip()

    blank2 = ET.Element('span')
    blank2.text = '):'

    p.append(number)
    p.append(predicate_name_link)
    p.append(blank)
    p.append(predicate_translation)
    p.append(blank2)
    return p


def render_examples_for_language(language: str) -> str:
    language_no = LANGUAGE_META.loc[language].language_no
    data = GOLDEN_DATA.loc[GOLDEN_DATA.language_no == language_no]
    result = ET.Element('div', attrib={'id': 'sentences'})

    option_any = ET.Element('option', attrib={'value': 'any'})
    option_any.text = 'Any'

    all_select_div = ET.Element('div')

    select_div = ET.Element(
        'div', attrib={'style': "display: inline-block; width: 200px;"})
    select_header = ET.Element('span')
    select_header.text = 'Subset examples by valency pattern'
    select = ET.Element('select', attrib={'id': 'valpal-select'})
    select.append(option_any)
    all_valpal = set()
    for t in data.itertuples():
        all_valpal.add(t.valency_pattern)
    valpal_arr = sorted(all_valpal, key=lambda x: str(x).lower())
    for vp in valpal_arr:
        option = ET.Element('option', attrib={'value': vp})
        option.text = vp if vp else 'NA'
        select.append(option)
    select_div.append(select_header)
    select_div.append(select)
    all_select_div.append(select_div)

    select_div = ET.Element(
        'div', attrib={'style': "display: inline-block; width: 200px;"})
    select_header = ET.Element('span')
    select_header.text = 'Subset examples by locus'
    select = ET.Element('select', attrib={'id': 'locus-select'})
    select.append(option_any)
    all_loci = set()
    for t in data.itertuples():
        all_loci.add(t.locus)
    loci_arr = sorted(all_loci, key=lambda x: str(x).lower())
    for l in loci_arr:
        option = ET.Element('option', attrib={'value': l})
        option.text = l if l else 'NA'
        select.append(option)
    select_div.append(select_header)
    select_div.append(select)
    all_select_div.append(select_div)

    result.append(all_select_div)
    result.append(ET.Element('p', attrib={'id': 'stats'}))

    for t in data.itertuples():
        block = ET.Element('div', attrib={
            'data-valpal': t.valency_pattern,
            'data-locus': t.locus,
            'style': 'margin-bottom: 5px'
        })
        block.append(render_example_header(t))
        block.append(render_example(t))
        result.append(block)

    return xml2str(result)


def render_examples_for_predicate(predicate_no_hash):
    predicate = PRED_W_HASH[predicate_no_hash]
    predicate_no = PRED_DICT[predicate]
    data_points = GOLDEN_DATA.loc[GOLDEN_DATA.predicate_no == predicate_no]

    result = ET.Element('div')
    h2 = ET.Element('h2')
    h2.text = f'‘{cleanup_predicate(predicate).strip()}’'
    result.append(h2)

    # Add predicate meta
    result.append(render_predicate_info(PREDICATES.loc[predicate_no], add_header=False))

    # Add examples
    for t in data_points.itertuples():
        block = ET.Element('div', attrib={
            'data-valpal': t.valency_pattern
        })
        language = LANG_DICT[t.language_no]
        p = ET.Element('p')
        p.append(lang_link(language))
        block.append(p)
        block.append(render_example(t))
        result.append(block)
    return xml2str(result)


def pipeline(template_text, parse_markdown, classes=None, language=None, predicate=None):
    """
    1. Render the project-specific template.
    2. Supply the globals using Jinja.
    3. Convert Markdown to HTML if needed.
    """
    md = render_template(
        template_text,
        language
    ).replace('{{ site_url_j }}', SITE_URL)
    if parse_markdown:
        main = markdown2.markdown(md, extras=["fenced-code-blocks", "tables"])
    else:
        main = md

    if classes is None:
        div_prefix = '<div id="main">'
    else:
        div_prefix = f'''<div id="main" class="{' '.join(classes)}">'''

    if language is not None:
        main = div_prefix + main + \
            ('\n' + '<h2>Data</h2>\n' +
                render_examples_for_language(language)) + '\n</div>'
    elif predicate is not None:
        main = div_prefix + main + \
            render_examples_for_predicate(predicate) + '\n</div>'
    else:
        main = div_prefix + main + '\n</div>'

    js = ''
    if language is not None:
        with open('../templates/partials/predicate_select.js', 'r') as inp:
            js = f'<script>\n{inp.read()}\n</script>'

    return BASE_TEMPLATE.format(
        includes=INCLUDES_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        header=HEADER_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        main=main.replace('{{ site_url_j }}', SITE_URL),
        script=js,
        footer=''
    )


def render_stimulus_sentence(sent: str, ru: str = '') -> ET.Element:
    d = dom('table', classes='' + ru)
    tr = dom('tr')
    if ru:
        tr.append(dom('td', text='Stimulus sentence Ru: ', classes='sc predicate-prop'))
    else:
        tr.append(dom('td', text='Stimulus sentence: ', classes='sc predicate-prop'))

    # Split the sentence into the parts between and around X and Y and X and Y themselves.
    xy_pattern = re.compile(r'\[(.+?)\]_(x|y)')
    m_iter = xy_pattern.finditer(sent)

    # First find the X and Y spans.
    match_spans = [m.span() for m in m_iter]
    if not match_spans:
        return dom('p', text=sent)

    # Add the spans between and around X and Y.
    spans = []
    # i runs over the span indices for X and Y;
    # j runs over the characters in the sentence.
    i = j = 0
    start_tmp = 0
    while j <= len(sent):
        if i < len(match_spans) and match_spans[i][1] == j:
            spans.append(match_spans[i])
            start_tmp = j
            i += 1
        elif i < len(match_spans) and j == match_spans[i][0]:
            spans.append([start_tmp, j])
        j += 1
    spans.append([start_tmp, j])

    td = dom('td', classes='stimulus-sentence')
    # Style and add spans.
    for lo, hi in spans:
        if lo == hi:
            continue
        if sent[hi-2:hi] == '_x':
            span = dom('span', classes='red bg', text=sent[lo+1:hi-3]+' ')
        elif sent[hi-2:hi] == '_y':
            if hi == len(sent) or sent[hi] in {'.', '»'}:
                span = dom('span', classes='blue bg', text=sent[lo+1:hi-3])
            else:
                span = dom('span', classes='blue bg', text=sent[lo+1:hi-3]+' ')
        else:
            span = dom('span', text=sent[lo:hi], classes='bg')
        td.append(span)
    tr.append(td)
    d.append(tr)
    return d


def render_argument_frame(text: str, ru: str = '') -> ET.Element:
    d = dom('table', classes='' + ru)
    tr = dom('tr')
    if ru:
        tr.append(dom('td', text='Argument frame Ru: ', classes='sc predicate-prop'))
    else:
        tr.append(dom('td', text='Argument frame: ', classes='sc predicate-prop'))

    td = dom('td', classes='stimulus-sentence')
    X_idx = text.find('X')
    Y_idx = text.find('Y')
    td.append(dom('span', text=text[:X_idx], classes='bg'))
    td.append(dom('span', text='X', classes='red bg'))
    td.append(dom('span', text=text[X_idx+1:Y_idx], classes='bg'))
    td.append(dom('span', text='Y', classes='blue bg'))
    td.append(dom('span', text=text[Y_idx+1:], classes='bg'))
    tr.append(td)
    d.append(tr)
    return d


def render_predicate_label(text: str, ru: str = '') -> ET.Element:
    d = dom('table', classes='' + ru)
    tr = dom('tr')
    if ru:
        tr.append(dom('td', text='Predicate label Ru: ', classes='sc predicate-prop'))
    else:
        tr.append(dom('td', text='Predicate label: ', classes='sc predicate-prop'))
    td = dom('td', classes='stimulus-sentence')
    td.append(dom('span', text=text, classes='bg'))
    tr.append(td)
    d.append(tr)
    return d


def render_predicate_info(t, add_header=True):
    predicate_div = ET.Element('div', attrib={'class': 'predicate-info-div'})

    if add_header:
        p = ET.Element('p')
        predicate_number = dom('span', text=f'{t.predicate_no}.')
        a = ET.Element('a', attrib={
            'class': 'data-link',
            'href': '{{ site_url_j }}/predicates/pred/' +
                    t.predicate_label_en.replace('#', '') +
                    '.html'
        })
        a.text = cleanup_predicate(t.predicate_label_en).strip()
        p.append(predicate_number)
        p.append(a)
        predicate_div.append(p)

    predicate_div.append(render_argument_frame(t.argument_frame_en))
    predicate_div.append(render_stimulus_sentence(t.stimulus_sentence_en))
    predicate_div.append(render_predicate_label(t.predicate_label_ru, ' ru'))
    predicate_div.append(render_argument_frame(t.argument_frame_ru, ' ru'))
    predicate_div.append(render_stimulus_sentence(t.stimulus_sentence_ru, ' ru'))
    return predicate_div


def language_list_page():
    result = ET.Element('div', attrib={'id': 'main'})
    result.append(dom('h3', text='Published languages'))
    active_languages = set(GOLDEN_DATA.language_no.unique())
    # Sort languages by the external name
    for lang_internal, lang_external in sorted(LANG_EXTERNAL.items(), key=lambda x: x[1]):
        lang_no = LANG_DICT[lang_internal]
        if lang_no not in active_languages:
            continue
        p = ET.Element('p')
        a = ET.Element('a', attrib={
            'href': f'{SITE_URL}/languages/descriptions/{lang_internal}.html'
        })
        a.text = lang_external
        p.append(a)
        p.append(dom( 'span', text='(' + PHYLO_DICT[lang_internal][0] + ', ' + PHYLO_DICT[lang_internal][1] + ')'))
        result.append(p)
    template = xml2str(result)
    return BASE_TEMPLATE.format(
        includes=INCLUDES_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        header=HEADER_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        main=template.replace('{{ site_url_j }}', SITE_URL),
        script='',
        footer=''
    )


def predicate_page():
    result = ET.Element('div', attrib={'id': 'main'})

    for t in PREDICATES.itertuples():
        result.append(render_predicate_info(t))
    template = xml2str(result)

    with open('../templates/partials/predicates_helpers.js', 'r') as inp:
        js = f'<script>\n{inp.read()}\n</script>'

    return BASE_TEMPLATE.format(
        includes=INCLUDES_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        header=HEADER_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        main=template
            .replace('{{ site_url_j }}', SITE_URL)
            .replace('<div id="main">', '''<div id="main">
    <div>
        <span><label for="russian_meta">Show Russian meta: </label></span><input type="checkbox" name="russian_meta" id="russian_meta" onchange="redraw();">
    </div>''')
            .replace('<span class="blue bg">Y</span>\n            <span class="bg">ache</span>',
                     '<span class="blue bg">Y</span><span class="bg">ache</span>')
            .replace('<span class="blue bg">head </span>\n            <span class="bg">ache.</span>',
                     '<span class="blue bg">head</span><span class="bg">ache.</span>')
            .replace('<span class="red bg">X</span>\n            <span class="bg">-',
                     '<span class="red bg">X</span><span class="bg">-')
            .replace('<span class="blue bg">Y</span>\n            <span class="bg">-',
                     '<span class="blue bg">Y</span><span class="bg">-'),
        script=js,
        footer=''
    )


# Walk the 'content' directory and convert files.
for root, _, files in os.walk('../content'):
    for f in files:
        prefix = f.split('.')[0]
        parse_md = not f.endswith('html')
        path = os.path.join(root, f)
        outpath = os.path.split(path)[0].replace('content', 'public')
        if not os.path.exists(outpath):
            os.makedirs(outpath)
        last_modified = os.stat(path).st_mtime
        if path not in LAST_MODIFIED or LAST_MODIFIED[path] != last_modified:
            LAST_MODIFIED[path] = last_modified
        else:
            continue
        print(path)
        with open(path, 'r', encoding='utf-8') as inp:
            txt = inp.read()
            with open(outpath + f'/{prefix}.html', 'w', encoding='utf-8') as out:
                if 'data' in path or 'mapview' in path:
                    print(pipeline(txt, parse_md), file=out)
                elif 'descriptions' in path:
                    print(pipeline(txt, parse_md,
                                   language=prefix), file=out)
                elif os.path.join('predicates', 'pred') in path:
                    print(pipeline(txt, parse_md,
                                   predicate=prefix), file=out)
                elif os.path.join('predicates', 'index.html') in path:
                    print(predicate_page(), file=out)
                elif os.path.join('listview', 'index.html') in path:
                    print(language_list_page(), file=out)
                else:
                    print(pipeline(txt, parse_md), file=out)
    with open('last_modified.json', 'w') as out:
        json.dump(LAST_MODIFIED, out)
