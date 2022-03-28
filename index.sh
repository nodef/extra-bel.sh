#!/bin/bash
# EBEL - Ring bells

# Options
n=1
if [[ "$1" != "" ]]; then n=$1

# Ring bells
for i in {1..${n}}; do
tput bel
sleep 1
done
