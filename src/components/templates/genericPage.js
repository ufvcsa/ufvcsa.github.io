import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';
import SEO from '../seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import MinutesList from '../MinutesList';

const genericPage = ({
  data /* passed in by gatsby-node.js in the build step */,
}) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  // List of globally available components in mdx files
  const shortcodes = { MinutesList };

  return (
    <Layout>
      <article>
        <SEO title={frontmatter.title} />
        <h1>{frontmatter.title}</h1>
        <section className="page-heading">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </section>
      </article>
    </Layout>
  );
};

export default genericPage;

/*The Query below is read by gatsby-node in the build step
 *See the documentation below for a quick overview:
 *
 *https://www.gatsbyjs.org/docs/adding-markdown-pages/
 */
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug }, template: { eq: "genericPage" } }) {
      body
      frontmatter {
        path
        title
      }
    }
  }
`;
