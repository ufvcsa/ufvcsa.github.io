import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const MinutesList = () => {
  // Get data
  const data = useStaticQuery(graphql`
    query minutesQuery {
      allMdx(
        filter: { frontmatter: { path: { regex: "/minutes//" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
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

  const edges = data.allMdx.edges;

  return (
    <ul className="minutesList">
      {edges.map(nodeWrapper => {
        const frontmatter = nodeWrapper.node.frontmatter;
        const { title, path, date } = frontmatter;
        const time = new Date(date);
        time.setHours(24);
        return (
          <li key={path}>
            <p>Occured on {time.toDateString()}</p>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MinutesList;
