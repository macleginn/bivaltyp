import sys
import json

import pandas as pd

d = pd.read_csv('../data/patterns.csv', sep='\t')
d.fillna('', inplace=True)
result = [list(d.columns)]
for row in d.itertuples(index=False):
    result.append(list(row))
result_string = json.dumps(result, indent=2, ensure_ascii=False)
with open('../public/js/data/patterns.js', mode='w', encoding='utf-8') as out:
    out.write(f'const patternsData = {result_string};')
