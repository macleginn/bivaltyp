import sys
import json

import pandas as pd

inpath = sys.argv[1]
outpath = sys.argv[2]
data_obj_name = sys.argv[3]

# Convert the spreadsheet to an array of arrays.
d = pd.read_csv(inpath, sep='\t')
# Not including commentary for now.
# d.drop(columns='comms', inplace=True)
result = []
result.append(list(d.columns))
for row in d.itertuples():
    result.append(list(row)[1:])
result_string = json.dumps(result, indent=2, ensure_ascii=False)
with open(outpath, mode='w', encoding='utf-8') as out:
    out.write(f'const {data_obj_name} = {result_string};')
