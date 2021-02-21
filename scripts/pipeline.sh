#! /bin/bash

# Exit on any error.
set -e
# Show all commands.
set -x

# python3 convert-xlsx.py
python3 collect_language_data.py
python3 convert-full-table.py
python3 convert-structural-table.py
# This also generates patterns.csv
python3 prepare_data_for_download.py
python3 convert-patterns.py
python3 compute_language_stats.py
# Combines the meta provided by Say with computed stats.
python3 collect_language_meta.py
python3 generate.py -r