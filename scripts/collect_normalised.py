import pandas as pd

languages_meta  = pd.read_csv('../data/languages.csv', sep='\t')
predicates_meta = pd.read_csv('../data/predicates.csv', sep='\t')
all_data        = pd.read_csv('../data/data_for_download.csv', sep='\t')
all_data        = pd.merge(languages_meta, all_data, on='language_no')
all_data        = pd.merge(all_data, predicates_meta, on='predicate_no')
all_data.to_excel('../data/unnormalised_data.xlsx', index=False)