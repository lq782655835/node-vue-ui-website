#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'deploy'
echo 'local commited'

# 发布到 github
git push -f https://github.com/lq782655835/node-vue-ui-website.git master
echo 'remote commited'

git push origin `git subtree split --prefix dist master`:gh-pages --force
# git subtree push --prefix site origin gh-pages
echo 'build in gh-pages'
