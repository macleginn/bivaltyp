import pandas as pd

patterns = pd.read_csv('../data/patterns.csv', sep='\t')
langs = pd.read_csv('../data/languages.csv', sep='\t')

lang_map = {}
for tup in langs[['language_ru', 'language']].itertuples():
    lang_map[tup.language_ru] = tup.language

new_cols = list(patterns.columns)
for i in range(5, len(new_cols)):
    print(new_cols[i])
    new_cols[i] = lang_map[new_cols[i]]
patterns.columns = new_cols

patterns.to_csv('../data/patterns.csv', sep='\t', index=False)
