#!/bin/bash
# OBEL - ring bells

# options
n=1
if [[ "$1" != "" ]]; then n=$1

# ring bells
for i in {1..${n}}; do
tput bel
sleep 1
done
