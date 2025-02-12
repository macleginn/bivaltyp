import pandas as pd
import numpy as np
from scipy.stats import entropy


def get_normalisation_coefficient(sample_size):
    """
    Returns a multiplicator for normalising entropy
    estimated on the sample based on the size of the sample.
    The coefficients were estimated empirically based
    on bootstrap resampling.
    """
    if sample_size < 55:
        raise ValueError('No coefficients were estimated for sample sizes < 55')
    elif sample_size >= 55 and sample_size < 60:
        # 55-59        1.04    (2 langs)
        return 1.04
    elif sample_size >= 60 and sample_size < 70:
        # 60-69        1.03    (1 lang)
        return 1.03
    elif sample_size >= 70 and sample_size < 79:
        # 70-78        1.02    (0 langs)
        return 1.02
    elif sample_size >= 79 and sample_size < 93:
        # 79-92        1.01    (5 langs)
        return 1.01
    elif sample_size >= 110:
        # 110-130    0.99
        return 0.99
    else:
        # 93-109      1.00
        return 1


data = pd.read_csv('../data/data_for_download.csv', sep='\t')
language_data = pd.read_csv('../data/languages.csv', sep='\t')
language_data.index = language_data.language_no
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
    projected_entropy_100 = entropy_nat * get_normalisation_coefficient(overall_N)
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
        'number_of_nominal_cases': str(int(language_data.loc[language_no].number_nominal_cases)) if not pd.isna(language_data.loc[language_no].number_nominal_cases) else '',
        'overallN': overall_N,
        'transitives': transitives,
        'intransitives': intransitives,
        'transitivity_ratio': transitivity_ratio,
        'intransitivity_ratio': intransitivity_ratio,
        'number_of_classes': number_of_classes,
        'entropy_nat': entropy_nat,
        'normalised_entropy': projected_entropy_100,
        'entropy_of_intransitives_nat': entropy_intr_nat,
        # 'maximum entropy for intransitives': entropy_max_intr,
        # 'entropy ratio': entropy_intr_over_max_intr,
        'X': X_locus,
        'Y': Y_locus,
        'XY': XY_locus
    })
stats_df = pd.DataFrame.from_records(records)
stats_df.to_csv('../data/language_stats.csv', index=False, sep='\t')
