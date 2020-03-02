/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const genericPage = path.resolve(`src/components/templates/genericPage.js`);
  const eventPage = path.resolve(`src/components/templates/eventPage.js`);

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              date
              template
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    if (node.frontmatter.template == 'genericPage') {
      createPage({
        path: node.frontmatter.path,
        component: genericPage,
        context: {
          slug: node.frontmatter.path, //used as the primary key to query for the page (see genericPage.js)
        },
      });
    } else if (node.frontmatter.template == 'eventPage') {
      createPage({
        path: `/events/${node.frontmatter.path}`,
        component: eventPage,
        context: {
          slug: node.frontmatter.path, //used as the primary key to query for the page (see eventPage.js)
        },
      });
    }
  });
};
