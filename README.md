# Date Timezone Proof of Concept

SEE: https://csgruenebe.github.io/date-time-and-timezone-poc/

&nbsp;

----

### Deploy to GH-Pages

```
# on master branch
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
```

&nbsp;

----

### License

[MIT](https://github.com/csgruenebe/date-time-and-timezone-poc/blob/master/LICENSE) © [Bernhard Grünewaldt](https://github.com/csgruenebe)
