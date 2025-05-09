#!/bin/sh
# Script to remove .js extension from describe() calls in test files under packages

set -e

echo "Removing .js extension from describe() calls in JS files under packages..."

find packages -type f -name "*.js" -not -path "*/node_modules/*" | while IFS= read -r file; do
  if grep -qE "describe\\(\\s*['\"][^'\"]+\\.js['\"]" "$file"; then
    sed -i -E "s/(describe\\(\\s*['\"])([^'\"]+)\\.js(['\"])/\\1\\2\\3/g" "$file"
    echo "Updated $file"
  fi
done

echo "Done."
