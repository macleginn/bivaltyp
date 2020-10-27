import pandas as pd
import numpy as np
from scipy.stats import entropy


data = pd.read_csv('../data/data_for_download.csv', sep='\t')
language_data = pd.read_csv('../data/languages.csv', sep='\t', skiprows=[1])
lang_dict = {}
for t in language_data.itertuples():
    lang_dict[t.language_no] = t.language
records = []
for language_no in data.language_no.unique():
    sample = data.loc[data.language_no == language_no]
    if sample.shape[0] != 130:
        print(f'Language no. {language_no} has a sample size of {sample.shape[0]}!')

    overall_N = sample.shape[0] - sum(pd.isna(sample.valency_pattern))
    locus_counts = dict(sample.locus.value_counts())
    transitives = locus_counts.get('TR', 0)
    intransitives = overall_N - transitives
    transitivity_ratio = round(transitives / overall_N, 2)
    intransitivity_ratio = 1 - transitivity_ratio

    counts_of_valpat_classes = sample.valency_pattern[
        np.logical_not(pd.isna(sample.valency_pattern))
    ].value_counts()
    number_of_classes = len(counts_of_valpat_classes)

    entropy_nat = entropy(counts_of_valpat_classes / sum(counts_of_valpat_classes))
    entropy_over_logN = entropy_nat / np.log(overall_N)
    intr_classes = list(filter(lambda x: x != 'TR', counts_of_valpat_classes.index))
    counts_of_intr_classes = counts_of_valpat_classes[intr_classes]
    entropy_intr_nat = entropy(counts_of_intr_classes / sum(counts_of_intr_classes))
    entropy_max_intr = np.log(intransitives)
    entropy_intr_over_max_intr = entropy_intr_nat / entropy_max_intr
    X_locus = locus_counts.get('X', 0) + locus_counts.get('Х', 0)
    Y_locus = locus_counts.get('Y', 0)
    XY_locus = locus_counts.get('XY', 0)
    if overall_N - (transitives + X_locus + Y_locus + XY_locus) != 0:
        print(f'Zero-sum check failed for language no. {language_no}: '
              f'overallN = {overall_N}, transitives = {transitives}, '
              f'X = {X_locus}, Y = {Y_locus}, XY = {XY_locus}')

    records.append({
        'language_no': language_no,
        'overallN': overall_N,
        'transitives': transitives,
        'intransitives': intransitives,
        'transitivity ratio': transitivity_ratio,
        'intransitivity ratio': intransitivity_ratio,
        'number of classes': number_of_classes,
        'entropy (nat)': entropy_nat,
        'normalised entropy': entropy_over_logN,
        'entropy of intransitives (nat)': entropy_intr_nat,
        # 'maximum entropy for intransitives': entropy_max_intr,
        # 'entropy ratio': entropy_intr_over_max_intr,
        'X': X_locus,
        'Y': Y_locus,
        'XY': XY_locus
    })
stats_df = pd.DataFrame.from_records(records)
stats_df.to_csv('../data/language_stats.csv', index=False, sep='\t')
