/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import '../styles/colours.css';
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/scaling.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex-horizontal" id="header">
        <div className="img" id="header-image">
          <img src="/images/csaheader.png" alt="CSA Header" />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
