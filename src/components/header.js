import { Link } from 'gatsby';
import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav:
        typeof window !== `undefined`
          ? window.innerWidth < 1024
            ? false
            : true
          : true,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  render() {
    const navListStyle = this.state.showNav
      ? { display: 'flex' }
      : { display: 'none' };

    return (
      <header>
        <nav className="flex-horizontal" id="main-nav">
          <button className="button nav-collapse" onClick={this.toggleNav}>
            <img className="icon" src="/images/menu.svg" alt="menu"></img>
          </button>
          <ul className="flex-horizontal simple-links" style={navListStyle}>
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
  }
}
