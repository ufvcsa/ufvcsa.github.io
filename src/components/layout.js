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
import '../styles/colours.css';
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/scaling.css';

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="flex-horizontal" id="header">
        <div className="img" id="header-image">
          <img src="/images/csaheader.png" />
        </div>
      </div>
      <div className="article">{children}</div>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
