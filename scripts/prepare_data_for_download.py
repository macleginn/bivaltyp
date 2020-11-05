import pandas as pd

d_full = pd.read_csv('../data/data.csv', sep='\t')
d_struct = pd.read_csv('../data/data_structural.csv', sep='\t')

records = []
full_langs = set()
for _, row in d_full.iterrows():
    full_langs.add(row.language_no)
    records.append(dict(row))
for _, row in d_struct.iterrows():
    # Skip fully described languages
    if row.language_no in full_langs:
        continue
    records.append(dict(row))
d_down = pd.DataFrame.from_records(records, columns=d_full.columns)
del d_down['predicate_label_ru']
d_down.to_csv('../data/data_for_download.csv', sep='\t', index=False)

# Extract patterns
d_meta = pd.read_csv('../data/languages.csv', sep='\t')
lang_names = {
    t.language_no: t.language for t in d_meta.itertuples()
}
d_pred_meta = pd.read_csv('../data/predicates.csv', sep='\t')
predicate_info = {
    t.predicate_no: {
        'predicate_label_en': t.predicate_label_en,
        'argument_frame_en':  t.argument_frame_en,
        'predicate_label_ru': t.predicate_label_ru,
        'argument_frame_ru':  t.argument_frame_ru
    } for t in d_pred_meta.itertuples()
}
meta_colnames = ['predicate_no',
                'predicate_label_en',
                'argument_frame_en',
                'predicate_label_ru',
                'argument_frame_ru']
column_names = meta_colnames + sorted(lang_names.values())
patterns_df = pd.DataFrame(columns=column_names,
                           index=sorted(predicate_info))

# Fill in predicate info
for k, v in predicate_info.items():
    patterns_df.loc[k, 'predicate_no'] = k
    for field in meta_colnames[1:]:
        patterns_df.loc[k, field] = v[field]

# Fill in valency patterns
for t in d_down.itertuples():
    language = lang_names[t.language_no]
    predicate_no = t.predicate_no
    patterns_df.loc[predicate_no, language] = t.valency_pattern

patterns_df.to_csv('../data/patterns.csv', sep='\t', index=False)