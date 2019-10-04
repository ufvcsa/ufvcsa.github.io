# UFV CSA Website

## Summary

This repository contains the source data for the UFV Computing Student Association's website!

### Goals

This repository has a few key goals:

1. Maintain the UFV CSA website with up-to-date and relevant content for CSA members.
2. Provide CSA members with an opportunity to work with and learn valuable workplace skills including:
   - Team Communication: How to effectively work with others on a real-world project.
   - Git / Github Workflows: How to manage code-bases using git / github
   - Realworld Web Technologies: How to work with modern web technologies like Gatsby.js, React, and Node.

## Contributing

**The website is currently in development!** If you have any ideas involving:

1. **Content:** Found a typo on the website? Have an even't you'd like to share with other members of the CSA? Have other content ideas? We'd love for you to make a contribution!
2. **Styling:** Don't like the way the site looks? Found a visual bug? We're open to suggestions and are planning on re-designing the site soon so let us know!
3. **Use-cases & Design:** Do you have an idea for a useful new feature? Do you feel like a feature on the site could be implemented better? Let's work on it!
4. **Pretty Much Anything Else**: We're open to general suggestions as well.

If anything listed above sounds like something you'd like to do, **We'd love for you to contribute and become part of the CSA's Open Source Community**.

We've tried to design this repository to be as accessible to all as possible. Whether you've never commited to open source before, or you're an active member of the community

### Getting Started

_If you're completely new to open source and github, we would reccomend checking out [this quick beginners guide](https://guides.github.com/activities/hello-world/) so you can get some background_

Depending on how you want to contribute, there are a few quick things you'll have to do before getting started: 


#### Working on existing issues
1. Check out the issues page. 
2. Find an issue you'd like to work on and comment on it, one of the repo's core maintainer's will let you know if the issue is open and assign it to you!
   - If this is your first time contributing, try checking out the issues marked "good first issue" as their reserved for people's first Pull Requests!
3. See the contribution guidelines found [here](./CONTRIBUTING.md)
4. set up your environment using [our guide](###setting-up-your-environment) and have fun!

#### Submitting new issues
1. Check if an issue already exists for what you're looking to do on our issues page.
2. See the contribution guidelines found [here](./CONTRIBUTING.md)
3. Create an issue following our guidelines and wait for approval from one of the repo's core maintainers.
4. Upon approval, set up your environment using [our guide](###setting-up-your-environment) and have fun!

### Setting up your environment

#### Things To Install
If you're looking to contribute to the repo, there are a few things you'll need have installed:

1. [**Node.js**](https://nodejs.org/en/): Node.js is a javascript runtime that allows you to write aavascript that runs directly on your machine through the Node runtime (as opposed to in a browser). 
2. [**NPM**](https://www.npmjs.com/): NPM (Node Package Manager) is a package manager for node and is used to handle dependencies for node based projects. It is usually included in Node.js
3. [**Prettier**](https://prettier.io/): Prettier is a code formatter plugin that we use to standardize our code styling. Prettier integrates with your IDE and will automatically format your code to match this repos perfered style (see .prettierrc)
4. [**Git**](https://git-scm.com/): As this is a git repository, you'll need the version control software git. If you're new to git, we'd recommend starting with a GUI like [Github Desktop](https://desktop.github.com/) or [Gitkraken](https://www.gitkraken.com/) to lessen the learning curve.
5. **IDE**: Last, but not least, you'll need an editor to make changes to the source files in. Use whatever you like as long as it has a prettier plugin.

#### Local Development Setup

To start working on the site on your local machine you'll need to:

1. Fork this repo (click the "fork" button at the top right hand side of the screen)
2. Clone your forked repo to your local machine using git cli or one of the git gui's we recommended
3. Navigate into the repo's folder in your shell of choice and run the command `npm install`. This will look at the package.json file and install all the necessary dependencies. 
4. Run the command `npm run start` once everything is installed. This will boot up a local development server that will live update as you make changes to the code.
5. Add your content, build your feature, fix your bug, and make a pull request!

#### Getting Started with Gatsby (What this site is built on)

This website is built using [Gatsby.js](https://www.gatsbyjs.org/)

Gatsby is a Static Site Generator; In our case this means it takes a bunch of source files, content files, and config files and compiles, minifies, and packages them together as a set of highly optimized HTML, CSS, and JS files that we can host as the website.

This allows us to develop with modern tools like React (what gatsby uses for UI), GraphQL (what gatsby uses for querying data), and markdown files with no large performance hit to the site. 

We'd highly recommend [their beginner friendly tutorial](https://www.gatsbyjs.org/tutorial/) as gatsby can be a lot to jump into without context

**If you have any questions or get lost along the way feel free to make an issue asking for help!**
