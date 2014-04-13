#!/bin/bash
set -e

echo Running tests.
echo ----------------------------------------------
jasmine-node spec/
echo Committing Changes and bumping version number.
echo ----------------------------------------------
node packageversionbump.js
echo Adding files to git
echo ----------------------------------------------
git add --all
echo Committing to git using first command line argument
echo ----------------------------------------------
git commit -m '$1'
echo Pushing to GIT repo
echo ----------------------------------------------
git push
echo Submitting to npm
echo ----------------------------------------------
sudo npm publish .