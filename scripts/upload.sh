#!/usr/bin/env bash

rsync --delete --progress -r ../public/ eurphon@eurphon.info:/var/www/static/bivaltyp
