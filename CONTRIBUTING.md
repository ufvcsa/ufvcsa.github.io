# Contributing

If you would like to make a contribution to this repository, please check the [issues](https://github.com/ufvcsa/ufvcsa.github.io/issues) first to see if an issue has already been created. If not, please create an issue before beginning work - this way, we can avoid having multiple people working on the same thing.

## Making a Pull Request

If you aren't familiar with the process of creating a pull request for a repository, here is an example of what it could look like:

1. Fork [the repository](https://github.com/ufvcsa/ufvcsa.github.io) using the **Fork** button at the top right. This will create a copy of the repository on your own GitHub account, which you will have read and write permissions for.
2. Clone your fork (which you can find under the 'My Repositories' section) to your computer. With Git: `git clone https://github.com/YourGithubUsername/ufvcsa.github.io`
3. Make changes to your clone as you would desire. Generally, smaller pull requests for single changes are preferable - if you want to make multiple changes, try and do them separately. For a given change, create a branch, e.g. `git checkout -b branch-for-x-feature` and make changes for that feature while on that branch.
4. When you've finished your changes, push them to your fork on GitHub: `git push -u origin HEAD` (This will create a remote branch with the same name as your local one)
5. From the GitHub web client, make a new pull request by visiting your local fork of the repository and selecting 'New Pull Request', then on the right side select your new branch under 'compare'. 
6. Make a description of the pull request that states the changes you have made and ideally a reference to the original issue.

## Development Process

The website setup is currently extremely simple. There are scripts in `scripts/` that enable compiling the `.ht` files in `src/` to `html`. **If you are making changes to the HTML content of a page, make the changes to the .ht version.** The directory structure is mirrored, so if you want to change `documents/constitution.html`, make your change in `src/documents/constitution.ht`. Afterwards, run `scripts/compile.py` and check to make sure that `documents/constitution.html` contains the changes you wanted.

If you like, you can use `scripts/compile-commit-clean.sh` to commit changes, which will remove all `html` files after committing them. Sourcing `scripts/env.sh` will make it so that `s` is an alias to a `git status` that does not show changes to `html` files.
