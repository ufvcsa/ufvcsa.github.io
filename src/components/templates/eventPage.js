import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../layout';
import SEO from '../seo';

const eventPage = ({data}) => {

  console.log("on the page!")

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <article>
        <SEO title={frontmatter.title} />
        <h1>{frontmatter.title}</h1>
        <p className="eventPage-date"><i>{new Date(frontmatter.date).toDateString()}</i></p>
        <p className="eventPage-location"><i>{frontmatter.location}</i></p>
        <section
          className="page-heading"
          dangerouslySetInnerHTML={{ __html: html }}
        ></section>
      </article>
    </Layout>
  )
}

export default eventPage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $slug }, template: {eq: "eventPage"} }
    ) {
      frontmatter {
        path
        title
        date
        location
      }
      html
    }
  }
`