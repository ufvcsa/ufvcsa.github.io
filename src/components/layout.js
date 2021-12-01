/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/keyframes.css';
import '../styles/vars.css';
import '../styles/header.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
