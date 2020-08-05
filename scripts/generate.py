import re
import os
import json
import sys

from subprocess import run
from xml.etree import ElementTree as ET
from xml.dom import minidom
from string import ascii_uppercase

import pandas as pd
import markdown2
# from jinja2 import Template, Environment

with open('../templates/base/base.html', 'r', encoding='utf-8') as inp:
    BASE_TEMPLATE = inp.read()
with open('../templates/partials/header.html', 'r', encoding='utf-8') as inp:
    HEADER_TEMPLATE = inp.read()
with open('../templates/partials/includes.html', 'r', encoding='utf-8') as inp:
    INCLUDES_TEMPLATE = inp.read()

SITE_URL = 'https://eurphon.info/static/bivaltyp'
# SITE_URL = 'file:///Users/macbook/Documents/Yandex.Disk/WorkInProgress/BivalTyp/webapp/public'

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
    'languages': '{{ site_url_j }}/languages/',
    'questionnaire': '{{ site_url_j }}/questionnaire/',
    'patterns': '{{ site_url_j }}/data/patterns/',
    'all_data': '{{ site_url_j }}/data/all/',
    'download': '{{ site_url_j }}/download/',
    'how to read the data': '{{ site_url_j }}/howtoreadthedata/'
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
LANGUAGE_META = pd.read_csv('../data/languages.csv', sep='\t')
LANGUAGE_META.fillna('', inplace=True)
LANGUAGE_META.index = LANGUAGE_META.language
LANGUAGE_META.data_collection_year = LANGUAGE_META.data_collection_year.map(
    lambda x: x if x == '' else int(x))
LANG_DICT = {}
for tup in LANGUAGE_META.itertuples():
    LANG_DICT[tup.language_no] = tup.language
    LANG_DICT[tup.language] = tup.language_no
LANG_EXTERNAL = {
    tup.language: tup.language_external for tup in LANGUAGE_META.itertuples()
}

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
    # predicate = ET.Element('span', attrib={'class': 'predicate-name'})
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
    '''
    This function processes the project-specific
    template elements replacing them with hyperlinks
    and appropriate values.
    '''
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


def cleanup_predicate(pred):
    result = pred.replace('_', ' ')
    m = re.search(r'#(.+)#', result)
    if m:
        return result.replace(
            m.group(0),
            f' ({m.group(1)}) '
        ).strip()
    else:
        return result


def cleanup_gloss(word):
    names_pat = re.compile(r'Pinchas|Menachem|Miriam')
    word = names_pat.sub('PN', word)
    # Only glosses are supposed to be in the upper case
    # at this stage.
    result = []
    tmp = []
    in_gloss = False
    for char in word:
        if char in ascii_uppercase:
            if not in_gloss:
                in_gloss = True
                if tmp:
                    span = ET.Element('span')
                    span.text = ''.join(tmp)
                    result.append(span)
                    tmp.clear()
        else:
            if in_gloss:
                in_gloss = False
                if tmp:
                    span = ET.Element('span', attrib={'class': 'gloss'})
                    span.text = ''.join(tmp).lower()
                    result.append(span)
                    tmp.clear()
        tmp.append(char)
    if tmp:
        if in_gloss:
            span = ET.Element('span', attrib={'class': 'gloss'})
            span.text = ''.join(tmp).lower()
        else:
            span = ET.Element('span')
            span.text = ''.join(tmp)
        result.append(span)
    return result


def get_predicate_meta_table(tup):
    result = ET.Element('table')

    tr = ET.Element('tr')
    valency_pattern = ET.Element(
        'td', attrib={'class': 'predicate-info-table'})
    valpal_span = ET.Element('span', attrib={'class': 'b'})
    valpal_span.text = 'Valency pattern:'
    valpal_span2 = ET.Element('span')
    valpal_span2.text = tup.valency_pattern
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


def get_predicate_example_table(tup):
    sent = tup.sentence
    glos = tup.glosses_en
    # A conservative way of rendering examples:
    # take what is the shortest array of words
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
    tran_td.text = tup.back_translation_en
    tran_tr.append(tran_td)
    result.append(tran_tr)

    div_el = ET.Element('div', attrib={'class': 'example-info-div'})
    div_el.append(result)
    return div_el


def xml2str(tree):
    return minidom.parseString(
        ET.tostring(tree, method='html', encoding='unicode')
    ).toprettyxml(
        indent='    '
    ).replace('<?xml version="1.0" ?>', '')


def render_example(tup):
    data_div = ET.Element('div', attrib={
        'class': 'predicate-info',
    })
    data_div.append(get_predicate_meta_table(tup))
    data_div.append(get_predicate_example_table(tup))
    return data_div


def render_example_header(tup):
    p = ET.Element('p', attrib={'class': 'examples-header'})
    number = ET.Element('span')
    number.text = f'{tup.predicate_no}. '
    predicate_name_link = pred_link(tup)
    blank = ET.Element('span')
    blank.text = ' ('
    predicate_translation = ET.Element(
        'span', attrib={'class': 'predicate-translation'})
    predicate_translation.text = tup.verb.strip()
    blank2 = ET.Element('span')
    blank2.text = '):'
    p.append(number)
    p.append(predicate_name_link)
    p.append(blank)
    p.append(predicate_translation)
    p.append(blank2)
    return p


def render_examples_for_language(language):
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
    for tup in data.itertuples():
        all_valpal.add(tup.valency_pattern)
    valpal_arr = sorted(all_valpal)
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
    for tup in data.itertuples():
        all_loci.add(tup.locus)
    loci_arr = sorted(all_loci)
    for l in loci_arr:
        option = ET.Element('option', attrib={'value': l})
        option.text = l if l else 'NA'
        select.append(option)
    select_div.append(select_header)
    select_div.append(select)
    all_select_div.append(select_div)

    result.append(all_select_div)
    result.append(ET.Element('p', attrib={'id': 'stats'}))

    for tup in data.itertuples():
        block = ET.Element('div', attrib={
            'data-valpal': tup.valency_pattern,
            'data-locus': tup.locus
        })
        block.append(render_example_header(tup))
        block.append(render_example(tup))
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
    for tup in data_points.itertuples():
        block = ET.Element('div', attrib={
            'data-valpal': tup.valency_pattern
        })
        language = LANG_DICT[tup.language_no]
        p = ET.Element('p')
        p.append(lang_link(language))
        block.append(p)
        block.append(render_example(tup))
        result.append(block)
    return xml2str(result)


def pipeline(txt, parse_md, classes=None, language=None, predicate=None):
    '''
    1. Render the project-specific template.
    2. Supply the globals using Jinja.
    3. Convert Markdown to HTML if needed.
    '''
    md = render_template(
        txt,
        language
    ).replace('{{ site_url_j }}', SITE_URL)
    if parse_md:
        main = markdown2.markdown(md, extras=["fenced-code-blocks"])
    else:
        main = md

    if classes is None:
        prefix = '<div id="main">'
    else:
        prefix = f'''<div id="main" class="{' '.join(classes)}">'''

    if language is not None:
        main = prefix + main + \
            ('\n' + '<h2>Data</h2>\n' +
                render_examples_for_language(language)) + '\n</div>'
    elif predicate is not None:
        main = prefix + main + \
            render_examples_for_predicate(predicate) + '\n</div>'
    else:
        main = prefix + main + '\n</div>'

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


def predicate_page():
    result = ET.Element('div', attrib={'id': 'main'})
    for tup in PATTERNS.itertuples():
        p = ET.Element('p')
        a = ET.Element('a', attrib={
            'class': 'data-link',
            'href': '{{ site_url_j }}/predicates/pred/' +
                    tup.predicate_label_en.replace('#', '') +
                    '.html'
        })
        a.text = cleanup_predicate(tup.predicate_label_en).strip()
        p.append(a)
        result.append(p)
    template = xml2str(result)

    return BASE_TEMPLATE.format(
        includes=INCLUDES_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        header=HEADER_TEMPLATE.replace('{{ site_url_j }}', SITE_URL),
        main=template.replace('{{ site_url_j }}', SITE_URL),
        script='',
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
                elif 'predicates/pred' in path:
                    print(pipeline(txt, parse_md,
                                   predicate=prefix), file=out)
                elif 'predicates/index.html' in path:
                    print(predicate_page(), file=out)
                else:
                    print(pipeline(txt, parse_md), file=out)
    with open('last_modified.json', 'w') as out:
        json.dump(LAST_MODIFIED, out)
