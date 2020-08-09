import json
import pandas as pd

d = pd.read_csv('../data/predicates.csv', sep='\t')
result = [list(d.columns)]
for t in d.itertuples():
    result.append(list(t)[1:])
result_string = json.dumps(result, indent=2, ensure_ascii=False)
with open('../public/js/data/predicates.js', 'w', encoding='utf-8') as out:
    out.write(f'const predicateData = {result_string}')
