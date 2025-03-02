#!/bin/sh

# This script is used to test the `npx bananass` commands of the project.
# It is executed by the `npm run test` command in `examples-solutions-bananass-*` directories.

# --------------------------------------------------------------------------------
# Declarations
# --------------------------------------------------------------------------------

readonly entry_dir="bananass"

# --------------------------------------------------------------------------------
# Tests
# --------------------------------------------------------------------------------

echo '> current working directory:' $(pwd)
echo '> ls' $entry_dir: $(ls $entry_dir)
echo

# Build
echo '> run `npx bananass build` command'
echo

npx bananass build $(ls $entry_dir | sed 's/\.[^.]*$//') # `fs` template.
npx bananass build $(ls $entry_dir | sed 's/\.[^.]*$//') --template-type rl # `rl` template.

# Run
echo '> run `npx bananass run` command'
echo

npx bananass run $(ls $entry_dir | sed 's/\.[^.]*$//')
