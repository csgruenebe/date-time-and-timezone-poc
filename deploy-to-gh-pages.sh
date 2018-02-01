#!/bin/bash

set -e

#
# BUILD
#
npm run build
if [ -d ../deploy-dist ]
then
  rm -rf ../deploy-dist
fi
mv dist ../deploy-dist
#
# GH-PAGES
#
git fetch -p
git checkout gh-pages
git pull
#
# CLEAN
#
rm -rf assets
rm -f index.html
rm -f *.js.map
rm -f *.js
#
# DEPLOY
#
mv ../deploy-dist/* .
git add . -A
git commit -m "deploy"
git push
#
# RESET AND CLEANUP
#
git checkout master
rm -rf ../deploy-dist/
