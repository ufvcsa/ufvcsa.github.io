import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';
import SEO from '../seo';

const genericPage = ({
  data /* passed in by gatsby-node.js in the build step */,
}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <article>
        <SEO title={frontmatter.title} />
        <h1>{frontmatter.title}</h1>
        <section
          className="page-heading"
          dangerouslySetInnerHTML={{ __html: html }}
        ></section>
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
  query($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, template: { eq: "genericPage" } }
    ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
