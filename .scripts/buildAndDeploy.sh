#!/bin/sh

setup_git_config() {
  git config --global user.name "TonyBrobston"

  git config credential.helper "store --file=.git/credentials"

  echo "https://${GITHUB_API_KEY}:@github.com" > .git/credentials

  git fetch
  git checkout master
}

install_dependencies() {
  yarn
}

deploy_to_github_pages() {
  yarn deploy
}

setup_git_config
install_dependencies
deploy_to_github_pages
