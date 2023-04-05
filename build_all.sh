#!/usr/bin/env bash
set -eo pipefail

PROJ_ROOT="$(cd "$(dirname "${0}")" && echo "${PWD}")"

echo "$PROJ_ROOT"

for chapter in ch*_ts; do
  cd "${chapter}"
  echo "In ${chapter}:"

  for section in ch*; do
    cd "${section}"
    echo "  Building ${section} ..."
    npx esbuild --bundle index.ts --outfile=index.js
    cd ..
  done

  echo "Build Done In ${chapter}"
  echo ""
  cd ..
done