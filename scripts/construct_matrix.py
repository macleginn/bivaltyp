import pandas as pd

d = pd.read_csv('result/data.csv', sep='\t')
matrix = pd.crosstab(d.language_no, d.predicate_no)
for i in range(matrix.shape[0]):
    for j in range(matrix.shape[1]):
        language_no = matrix.index[i]
        predicate_no = matrix.columns[j]
        matrix.iloc[i, j] = d.loc[
            (d.predicate_no == predicate_no) & (d.language_no == language_no)
        ].valency_pattern.values[0]
matrix.to_csv('result/matrix_generated.csv', sep='\t')
