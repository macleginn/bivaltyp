import re
import os
import sys
from xml.etree import ElementTree as ET
from xml.dom import minidom
from string import ascii_uppercase

import pandas as pd

import markdown2
from jinja2 import Template, Environment

with open('../templates/base/base.html', 'r', encoding='utf-8') as inp:
    BASE_TEMPLATE = Template(inp.read())
with open('../templates/partials/header.html', 'r', encoding='utf-8') as inp:
    HEADER_TEMPLATE = Template(inp.read())
with open('../templates/partials/includes.html', 'r', encoding='utf-8') as inp:
    INCLUDES_TEMPLATE = Template(inp.read())

JINJA_GLOBALS = {
    'site_url_j': 'https://eurphon.info/static/bivaltyp'
    # 'site_url_j': 'file:///Users/macbook/Documents/Yandex.Disk/WorkInProgress/BivalTyp/webapp/public'
}

# Project specific commands

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

# Load the golden-data.
GOLDEN_DATA = pd.read_csv('../data/data.csv', sep='\t')

# Load the patterns
PATTERNS = pd.read_csv('../data/patterns.csv', sep='\t')
PATTERNS.index = PATTERNS.predicate_no


def renderTemplate(txt, language):
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


def cleanupPredicate(pred):
    result = pred.replace('_', ' ')
    m = re.search(r'#(.+)#', result)
    if m:
        return result.replace(
            m.group(0),
            f' ({m.group(1)}) '
        ).strip()
    else:
        return result


def cleanupGloss(word):
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


def renderInfoTuple(tup):
    result = ET.Element('table')

    tr = ET.Element('tr')
    X = ET.Element('td', attrib={'class': 'predicate-info-table'})
    X.text = f'X: {tup.X}'
    Y = ET.Element('td', attrib={'class': 'predicate-info-table'})
    Y.text = f'Y: {tup.Y}'
    tr.append(X)
    tr.append(Y)
    result.append(tr)

    tr2 = ET.Element('tr')
    locus = ET.Element('td', attrib={'class': 'predicate-info-table'})
    locus.text = f'Locus: {tup.locus}'
    valency_pattern = ET.Element(
        'td', attrib={'class': 'predicate-info-table'})
    valency_pattern.text = f'Valency pattern: {tup.valency_pattern}'
    tr2.append(locus)
    tr2.append(valency_pattern)
    result.append(tr2)

    return result


def renderExampleTuple(tup):
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
        for span in cleanupGloss(word):
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

    return result


def renderExamples(language):
    language_no = LANGUAGE_META.loc[language].language_no
    data = GOLDEN_DATA.loc[GOLDEN_DATA.language_no == language_no]
    result = ET.Element('div', attrib={'id': 'sentences'})
    for tup in data.itertuples():
        p = ET.Element('p', attrib={'class': 'examples-header'})
        predicate = ET.Element('span', attrib={'class': 'predicate-name'})

        number = ET.Element('span')
        number.text = f'{tup.predicate_no}. '

        predicate_name = PATTERNS.loc[tup.predicate_no].predicate_label_en
        predicate.text = cleanupPredicate(predicate_name).strip()

        blank = ET.Element('span')
        blank.text = ' ('

        predicate_translation = ET.Element(
            'span', attrib={'class': 'predicate-translation'})
        predicate_translation.text = tup.verb.strip()

        blank2 = ET.Element('span')
        blank2.text = '):'

        p.append(number)
        p.append(predicate)
        p.append(blank)
        p.append(predicate_translation)
        p.append(blank2)

        result.append(p)
        data_div = ET.Element('div', attrib={'class': 'predicate-info'})
        data_div.append(renderInfoTuple(tup))
        data_div.append(renderExampleTuple(tup))
        result.append(data_div)
    return minidom.parseString(
        ET.tostring(result, method='html', encoding='unicode')
    ).toprettyxml(indent='    ')


def pipeline(txt, parse_md, classes=None, language=None):
    '''
    1. Render the project-specific template.
    2. Supply the globals using Jinja.
    3. Convert Markdown to HTML if needed.
    '''
    jinja_txt = renderTemplate(txt, language)
    jinja_template = Template(jinja_txt)
    md = jinja_template.render(JINJA_GLOBALS)
    if parse_md:
        main = markdown2.markdown(md)
    else:
        main = md

    if classes is None:
        prefix = '<div id="main">'
    else:
        prefix = f'''<div id="main" class="{' '.join(classes)}">'''

    if language is not None:
        main = prefix + main + \
            ('\n' + '<h2>Questionnaire</h2>\n' +
             renderExamples(language)) + '\n</div>'
    else:
        main = prefix + main + '\n</div>'

    return BASE_TEMPLATE.render(
        includes=INCLUDES_TEMPLATE.render(JINJA_GLOBALS),
        header=HEADER_TEMPLATE.render(JINJA_GLOBALS),
        main=main
    )


# Walk the 'content' directory and convert files.
for root, _, files in os.walk('../content'):
    for f in files:
        prefix = f.split('.')[0]
        parse_md = not f.endswith('html')
        path = os.path.join(root, f)
        print(path)
        outpath = os.path.split(path)[0].replace('content', 'public')
        if not os.path.exists(outpath):
            os.makedirs(outpath)
        with open(path, 'r', encoding='utf-8') as inp:
            txt = inp.read()
            with open(outpath + f'/{prefix}.html', 'w', encoding='utf-8') as out:
                if 'data' in path or 'mapview' in path:
                    print(pipeline(txt, parse_md), file=out)
                elif 'descriptions' in path:
                    print(pipeline(txt, parse_md,
                                   classes=['txt'],
                                   language=prefix), file=out)
                else:
                    print(pipeline(txt, parse_md, classes=['txt']), file=out)
