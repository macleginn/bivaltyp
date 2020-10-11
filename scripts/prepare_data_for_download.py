import pandas as pd

d_full = pd.read_csv('../data/data.csv', sep='\t')
d_struct = pd.read_csv('../data/data_structural.csv', sep='\t')

records = []
for _, row in d_full.iterrows():
    records.append(dict(row))
for _, row in d_struct.iterrows():
    records.append(dict(row))
d_down = pd.DataFrame.from_records(records, columns=d_full.columns)
del d_down['predicate_label_ru']
d_down.to_csv('../data/data_for_download.csv', sep='\t', index=False)