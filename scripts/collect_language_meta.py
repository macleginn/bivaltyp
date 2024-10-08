import json
import pandas as pd

d = pd.read_csv('../data/languages.csv', sep='\t')
out_columns = [
    "language_no",
    "glottocode",
    "language_ru",
    "language",
    "expert_ru",
    "expert",
    "macroarea",
    "family (WALS)",
    "genus (WALS)",
    "latitude",
    "longitude",
    "language_external"
  ]
d_small = d[out_columns]

stats_df = pd.read_csv('../data/language_stats.csv', sep='\t')
d_final = pd.merge(left=d_small, right=stats_df, on='language_no')
# Reorder columns
d_final = d_final[[
    "language_no",
    "glottocode",
    "language",
    "language_ru",
    "language_external",
    "expert",
    "expert_ru",
    "macroarea",
    "family (WALS)",
    "genus (WALS)",
    "latitude",
    "longitude",
    "number of nominal cases",
    "overallN",
    "transitives",
    "intransitives",
    "transitivity ratio",
    "intransitivity ratio",
    "X",
    "Y",
    "XY",
    "number of classes",
    "entropy (nat)",
    # "normalised entropy",
    "entropy of intransitives (nat)",
    # "maximum entropy for intransitives",
    # "entropy ratio"
]]

d_final['number of nominal cases'] = [
    str(int(el)) if not pd.isna(el) else 'No data'
    for el in d_final['number of nominal cases']
]

result = [list(d_final.columns)]
for t in d_final.itertuples():
    result.append(list(t)[1:])
result_string = json.dumps(result, indent=2, ensure_ascii=False)
with open('../public/js/data/languages.js', 'w', encoding='utf-8') as out:
    out.write(f'const languageData = {result_string}')
