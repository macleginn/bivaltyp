:: python convert-xslx.py
python collect_language_data.py
python convert-full-table.py
python convert-structural-table.py
python compute_language_stats.py
:: Combines the meta provided by Say with computed stats.
python collect_language_meta.py