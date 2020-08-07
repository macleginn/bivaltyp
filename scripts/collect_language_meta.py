import json
import pandas as pd

d = pd.read_csv('../data/languages.csv', sep='\t')
out_columns = [
    "language_no",
    "language_ru",
    "language",
    "expert_ru",
    "expert",
    "macroarea_WALS",
    "family_WALS",
    "genus_WALS",
    "latitude",
    "longitude",
    "number_nominal_cases",
    "language_external"
  ]
d_small = d[out_columns]
result = [list(d_small.columns)]
for t in d_small.itertuples():
    result.append(list(t)[1:])
result_string = json.dumps(result, indent=2, ensure_ascii=False)
with open('../public/js/data/languages.js', 'w', encoding='utf-8') as out:
    out.write(f'const languageData = {result_string}')
