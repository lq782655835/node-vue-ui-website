#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'deploy'

echo 'local commited'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:lq782655835/node-checker.git master
# echo 'remote commited'
# cd -
