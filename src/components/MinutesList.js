import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const MinutesList = () => {
  const data = useStaticQuery(graphql`
    query minutesQuery {
      allMdx(filter: { frontmatter: { path: { regex: "/minutes//" } } }) {
        edges {
          node {
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
    }
  `);

  const { allMdx } = data;
  const { edges } = allMdx;

  return (
    <ul>
      {edges.map(nodeWrapper => {
        const { node } = nodeWrapper;
        const { frontmatter } = node;
        const { title, path, date } = frontmatter;
        return (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MinutesList;
