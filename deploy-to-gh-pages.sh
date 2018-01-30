#!/bin/bash

set -e

yarn build
mv dist ../deploy-dist
mkdir ../bkp_deploy/
mv .idea ../bkp_deploy/
mv *.iml ../bkp_deploy/
mv node_modules ../bkp_deploy/
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
mv ../bkp_deploy/* .
mv ../bkp_deploy/.[!.]* .
rm -rf ../bkp_deploy/
