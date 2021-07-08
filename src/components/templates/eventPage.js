import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';
import SEO from '../seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import MinutesList from '../mdxUtils/MinutesList';

const eventPage = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  const shortcodes = { MinutesList };

  return (
    <Layout>
      <article>
        <SEO title={`UFV CSA: ${frontmatter.title}`} />
        <h1>{frontmatter.title}</h1>

        <p className="eventPage-date">
          <i>{new Date(frontmatter.date).toDateString()}</i>
        </p>
        <p className="eventPage-location">
          <i>{frontmatter.location}</i>
        </p>
        <section className="page-heading">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </section>
      </article>
    </Layout>
  );
};

export default eventPage;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug }, template: { eq: "eventPage" } }) {
      body
      frontmatter {
        path
        title
        date
        location
      }
    }
  }
`;
