import os
import pandas as pd

dir_name = '../sources'
for fname in os.listdir(dir_name):
    if not fname.endswith('xlsx'):
        continue
    data = pd.read_excel(f'{dir_name}/{fname}')
    data.to_csv(f'../data/langtables_structural/{fname.replace("xlsx", "csv")}', sep='\t', index=False)
