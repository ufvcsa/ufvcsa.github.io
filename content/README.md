# The Content Folder

## What is the content folder?

The content folder is where all _content_ used on the site is stored.

By separating our content from the rest of the site, we can develop the site using templates. A Template-based workflow provides a few key benefits:

1. **Content isn't tied to source code:** By separating content from source code, we remove the possibility of new bugs or issues relating to accidental changes to the source file when editing content. _(i.e when editing a page, a user forgot to close a `<div>` tag and broke the whole page's layout)_
2. **Development is faster**: Instead of creating a new template file that has a header, body, and footer for each page, we can write one template for each type of page, and use it throughout.

## How do I use the content folder?

The content folder contains a folder for each _type_ of page on the site. Each type (aka `template`) correlates to a template file in `/src/components/templates`.

These folders contain markdown (`.mdx`) files; each markdownx file correlates to a page on the site.

mardownx (or `.mdx`) files work exactly like normal markdown files; they follow the exact same syntax. However, with mdx users can also utilize JSX and Javascript! This allows us to do things like use React components in markdown (which allows for dynamic content and user interaction).
You can [learn more about it here](https://www.gatsbyjs.org/docs/mdx/).

### Folders

As of right now, we only have two templates, and in-turn, two corresponding folders:

1. `/content/events/`: A page for events that allows you to specify a title, location, time and description for an upcoming or previous event.
2. `/content/pages/`: A generic page used for general content. This page-type is used when you just want some text on a page.

### Markdown Files

Each page on the site has a markdown folder where it gets its content from.

Markdown folders have two main sections:

1. Frontmatter: where metadata for the file goes.
   - This is used to determine things like the title, template, and slug for the page
2. Body: where the body of the markdown goes
   - Markdown can be converted directly into HTML so any valid HTML is valid markdown and vice-versa.

## Template Schema

Frontmatter schemas for creating new files. These schemas are specific to the page type

### Page Schema

| Name     | Description                      |
| -------- | -------------------------------- |
| Title    | The title of the page            |
| Template | The template file to be used     |
| Path     | The last portion of the URL (ID) |

### Event Schema

| Name     | Description                        |
| -------- | ---------------------------------- |
| Title    | The title of the page              |
| Template | The template file to be used       |
| Path     | The last portion of the URL (ID)   |
| Date     | The date of the event (YYYY-MM-DD) |
| Location | The location of the event          |

## How does this work with Gatsby?

Gatsby uses these files during the build step to create the pages for the site!

### Plugins find and read the markdown files

There are a few plugins that enable gatsby to do this:

1. Gatsby-Source-Filesystem: This plugin makes gatsby aware of our content folder (including its folders, and files)

2. Gatsby-transformer-remark: This plugin finds all the .md files in the repo, interprets them, and makes them available to Gatsby through GraphQL queries.

_See `/gatsby-config.js` for our plugins_

### `/gatsby-node.js` creates a page for each markdown file

`/gatsby-node.js` gives us access to gatsby's build step through Node.js! We've written some code in this file that finds all the markdown files, and creates a page for each.

These pages are created using the frontmatter for each markdown file. For example, we create and set the routes for pages based on their template and path variables in frontmatter.
