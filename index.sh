#!/usr/bin/env bash
# XBEL - Ring bells

# Options
n=1
if [[ "$1" != "" ]]; then n=$1
fi

# Ring bells
for (( i = 1; i <= $n; i++ )); do
  tput bel
  sleep 1
done
