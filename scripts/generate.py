import re

import markdown2
from jinja2 import Template


with open('../templates/base/base.html', 'r', encoding='utf-8') as inp:
    BASE_TEMPLATE = Template(inp.read())
with open('../templates/partials/header.html', 'r', encoding='utf-8') as inp:
    HEADER_TEMPLATE = Template(inp.read())
with open('../templates/partials/includes.html', 'r', encoding='utf-8') as inp:
    INCLUDES_TEMPLATE = Template(inp.read())

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
    'version': '<span id="version"></span>'
}

JINJA_GLOBALS = {
    'site_url_j': 'https://eurphon.info/static/bivaltyp'
    # 'site_url_j': 'file:///Users/macbook/Documents/Yandex.Disk/WorkInProgress/BivalTyp/webapp/public'
}


def renderTemplate(txt):
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
    result = txt
    # Replace keys from longest to shortest
    # to obviate substring problems.
    tuples = sorted(replacement_dict.items(),
                    key=lambda x: len(x[0]), reverse=True)
    for k, v in tuples:
        result = result.replace(k, v)
    return result


def pipeline(txt, classes=None):
    # 1. Render the project-specific template.
    # 2. Supply the globals using Jinja.
    # 3. Convert Markdown to HTML
    jinja_txt = renderTemplate(txt)
    jinja_template = Template(jinja_txt)
    md = jinja_template.render(JINJA_GLOBALS)
    main = markdown2.markdown(md)
    if classes is None:
        main = '<div id="main">' + main + '</div>'
    else:
        main = f'''<div id="main" class="{' '.join(classes)}">''' + \
            main + '</div>'

    return BASE_TEMPLATE.render(
        includes=INCLUDES_TEMPLATE.render(JINJA_GLOBALS),
        header=HEADER_TEMPLATE.render(JINJA_GLOBALS),
        main=main
        # includes=INCLUDES_TEMPLATE.render(JINJA_GLOBALS),
    )


with open('../content/index.md', 'r', encoding='utf-8') as inp:
    txt = inp.read()
    with open('../public/index.html', 'w', encoding='utf-8') as out:
        print(pipeline(txt, ['txt']), file=out)
