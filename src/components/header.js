import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header>
    <nav className="flex-horizontal" id="main-nav">
      <ul className="flex-horizontal simple-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/events">
          <li>Events</li>
        </Link>
        <Link to="/resources">
          <li>Resources</li>
        </Link>
        <Link to="/docs">
          <li>Documents</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
