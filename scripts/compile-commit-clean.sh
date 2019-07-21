#!/bin/bash

# This compiles all *ht files into HTML, commits the result, and then cleans the working directory.
./compile.py
git add .
git commit -m "$1"
scripts/clean.sh
