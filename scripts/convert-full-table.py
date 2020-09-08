import sys
import json

import pandas as pd

DATA_DIR = '../data'
OUT_DIR = '../public/js/data'

# Convert the spreadsheet to an array of arrays.
d = pd.read_csv(f'{DATA_DIR}/data.csv', sep='\t')
d.fillna('', inplace=True)

# Replace numbers of languages and predicates with
# their names.
meta_langs = pd.read_csv(f'{DATA_DIR}/languages.csv', sep='\t', skiprows=[1])
lang_name_dict = {
    tup.language_no: tup.language_external
    for tup in meta_langs.itertuples()
}
meta_predicates = pd.read_csv(f'{DATA_DIR}/patterns.csv', sep='\t')
predicate_dict = {
    tup.predicate_no: tup.predicate_label_en
    for tup in meta_predicates.itertuples()
}

d.language_no = d.language_no.map(lambda x: lang_name_dict[x])
d.predicate_no = d.predicate_no.map(lambda x: predicate_dict[x])

result = []
result.append(list(d.columns))
result[0][0] = 'language'
result[0][1] = 'predicate'
result[0][11] = 'comments'
for row in d.itertuples():
    result.append(list(row)[1:])
result_string = json.dumps(result, indent=2, ensure_ascii=False)
with open(f'{OUT_DIR}/full.js', mode='w', encoding='utf-8') as out:
    out.write(f'const fullData = {result_string};')
