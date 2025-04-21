#! /bin/bash

# Exit on any error.
set -e
# Show all commands.
set -x

# python3 convert-xlsx.py
uv run python collect_language_data.py
uv run python convert-full-table.py
uv run python convert-structural-table.py
# This also generates patterns.csv
uv run python prepare_data_for_download.py
uv run python convert-patterns.py
uv run python compute_language_stats.py
# Combines the meta provided by Say with computed stats.
uv run python collect_language_meta.py
uv run python generate.py -r
