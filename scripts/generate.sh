#!/usr/bin/env bash

python3 collect_language_meta.py &&
python3 collect_language_data.py &&
python3 convert-full-table.py &&
python3 generate.py -r &&
./upload.sh