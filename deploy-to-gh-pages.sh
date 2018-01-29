#!/bin/bash

set -e

yarn build
mv dist ../deploy-dist
git fetch -p
git checkout gh-pages
git pull
rm -rf *
mv ../deploy-dist/* .
rm -rf ../deploy-dist/
git add . -A
git commit -m "deploy"
git push
git checkout master
