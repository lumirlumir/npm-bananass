#!/bin/sh

# This script is used to test the `npx bananass` commands of the project.
# It is executed by the `npm run test` command.

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

npx bananass build $(ls $entry_dir | sed 's/\.[^.]*$//')
