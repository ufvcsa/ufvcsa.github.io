# The Src Folder

## What is the src folder?

The src folder should be a pretty familiar concept if you've ever worked on a programming project before. It contains the majority of the source code for the project!

## How do I use the src folder?

The source folder has several subfolders you can make changes to.

### Folders

#### `/src/components`

This folder contains all of the [React.js](https://reactjs.org/) components used throughout the site as well as the template files for the generated pages (see `/src/components/templates`)

React is a component-based javascript framework that enables you to encapsulate reusable "components" in a single file. These components contain markup (jsx: a template language based on HTML), and component-specific logic.

_[For a quick intro to React we'd recommend this tutorial](https://scotch.io/starters/react/getting-started-with-react-2019-edition)_

#### `/src/images`

Holds images that are specific to the react components in `/src/components/`. This should not be used for static images (which should be stored in `/static/`)

#### `/src/pages`

This is a standard folder in Gatsby's projects. Each .js file (React Component) in `/pages/` is created as a page during the build step. The file name is the route for the page

Since all of our pages are currently template-based all we have in here is a 404.js file

#### `/src/styles`

This is the CSS folder. It contains all the styles we're using throughout the project!

## How does this work with Gatsby?

Gatsby uses each folder differently, but in essence, it compiles the React Components needed, and creates pages based on what's requested by the code written in `/gatsby-node.js`.

For more information on what `/gatsby-node.js` does see the [readme.md in the content folder](../content/README.md##How-Does-This-Work-With-Gatsby?)
