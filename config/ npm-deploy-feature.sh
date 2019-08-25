#!/bin/bash
git config --global -l
git config --global user.email toilatung@icloud.com
git config --global user.name ToiLaTung
git remote --v

# Get the last tag from GitHub
lastTag=$(git describe --tags $(git rev-list --tags --max-count=1))

# Bump the version
npm version $lastTag-feature.$CIRCLE_BUILD_NUM

# Push the new tag to Github
git push --tags

# Copy files to dist
#cpx package.json dist
#cpx README.md dist

# Publish to NPM
cd dist/ng-tlt
npm publish --tag feature