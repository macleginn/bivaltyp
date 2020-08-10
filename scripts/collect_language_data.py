import os
import pandas as pd

COLNAMES = [
    'language_no',
    'language',
    'predicate_no',
    'predicate_label_en',
    'argument_frame_en',
    'predicate_label_ru',
    'argument_frame_ru',
    'verb',
    'X',
    'Y',
    'locus',
    'valency_pattern',
    'comms',
    'sentence',
    'glosses_en',
    'back_translation_en',
    'glosses_ru',
    'back_translation_ru',
    'comms_internal'
]

COLNAMES_OUT = [
    'language_no',
    'predicate_no',
    'verb',
    'X',
    'Y',
    'locus',
    'valency_pattern',
    'sentence',
    'glosses_en',
    'back_translation_en',
    'comms',
    'glosses_ru',
    'back_translation_ru'
]

DATA_DIR = '../data'

records = []
for fname in os.listdir(f'{DATA_DIR}/langtables'):
    if not fname.endswith('.csv'):
        continue
    print(fname)
    d = pd.read_csv(f'{DATA_DIR}/langtables/{fname}', sep='\t')
    if COLNAMES != list(d.columns):
        raise ValueError(f'''
{fname} has column names incompatible with other files:
Found:
{d.columns}
Expected:
{COLNAMES}''')
    for verb_tuple in d[[
        'language_no',
        'predicate_no',
        'verb',
        'X',
        'Y',
        'locus',
        'valency_pattern',
        'comms',
        'sentence',
        'glosses_en',
        'back_translation_en',
        'comms',
        'glosses_ru',
        'back_translation_ru'
    ]].itertuples():
        records.append((
            verb_tuple.language_no,
            verb_tuple.predicate_no,
            verb_tuple.verb,
            verb_tuple.X,
            verb_tuple.Y,
            verb_tuple.locus,
            verb_tuple.valency_pattern,
            verb_tuple.sentence,
            verb_tuple.glosses_en,
            verb_tuple.back_translation_en,
            verb_tuple.comms,
            verb_tuple.glosses_ru,
            verb_tuple.back_translation_ru
        ))

result = pd.DataFrame.from_records(records, columns=COLNAMES_OUT)
result.to_csv(f'{DATA_DIR}/data.csv', sep='\t', index=False)
