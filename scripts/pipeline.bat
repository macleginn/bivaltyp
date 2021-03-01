:: python convert-xlsx.py
python collect_predicate_meta.py
python collect_language_data.py
python convert-full-table.py
python convert-structural-table.py
:: This also generates patterns.csv
python prepare_data_for_download.py
python convert-patterns.py
python compute_language_stats.py
:: Combines the meta provided by Say with computed stats.
python collect_language_meta.py
python generate.py -r