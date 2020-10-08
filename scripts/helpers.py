import re

from string import ascii_uppercase
from xml.etree import ElementTree as ET
from xml.dom import minidom


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
    # Only glosses are supposed to be in the upper case at this stage.
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


def dom(element_name: str, text: str = None, classes: str = None) -> ET.Element:
    if text is None and classes is None:
        return ET.Element(element_name)
    elif text is None:
        return ET.Element(element_name, attrib={'class': classes})
    elif classes is None:
        result = ET.Element(element_name)
        result.text = text
        return result
    else:
        result = ET.Element(element_name, attrib={'class': classes})
        result.text = text
        return result


def xml2str(tree):
    return minidom.parseString(
        ET.tostring(tree, method='html', encoding='unicode')
    ).toprettyxml(
        indent='    '
    ).replace('<?xml version="1.0" ?>', '').replace('&lt;i&gt;', '<i>').replace('&lt;/i&gt;', '</i>')