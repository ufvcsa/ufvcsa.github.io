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

**We'd highly recommend [Gatsby's beginner-friendly tutorial](https://www.gatsbyjs.org/tutorial/) as Gatsby can be a lot to jump into without context**. The tutorial is aimed towards web-dev beginners so don't be afraid to give it a shot no-matter your experience!

### Developing Locally
*Before trying to develop locally, make sure you've installed all the required software [that we list in our README.md](./README.md#####Things-To-Install)*

To start working on the site on your local machine you'll need to:

1. Navigate into the repo's folder in your shell of choice and run the command `npm install`. This will look at the package.json file and install all the necessary dependencies. 
2. Run the command `npm run start` once everything is installed. This will boot up a local development server that will live update as you make changes to the code.
3. *optional step* open up [Gatsby's documentation site](https://www.gatsbyjs.org/docs/) or [their tutorial](https://www.gatsbyjs.org/tutorial/) if you're just getting started!
3. Add your content, build your feature, fix your bug, and make a pull request! 



