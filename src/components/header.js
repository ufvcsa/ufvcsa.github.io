import { Link } from 'gatsby';
import React from 'react';

// Disabling this warning because the interactive div is only shown on touch devices
// It doesn't make sense to have a keyboard listener only for a touch device
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    // Just defining here
    // Will always be set by setShowNav() when component mounts
    this.state = { showNav: undefined, isMobile: undefined };

    this.toggleNav = this.toggleNav.bind(this);
    this.initializeStates = this.initializeStates.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    // Can only set the showNav state once the component has mounted
    this.initializeStates();
    window.addEventListener('resize', this.initializeStates);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initializeStates);
  }

  initializeStates() {
    this.setState({
      showNav: window.innerWidth >= 768,
      isMobile: window.innerWidth < 768,
    });
  }

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  closeNav() {
    this.setState({
      showNav: false,
    });
  }

  render() {
    const navListStyle = this.state.showNav
      ? { display: 'flex' }
      : { display: 'none' };

    return (
      <header>
        <nav className="nav flex-horizontal">
          <Link className="logo" to="/">
            <img src="/images/csa_logo_leaf.svg" alt="CSA Leaf"></img>
          </Link>
          <button className="button nav-collapse" onClick={this.toggleNav}>
            <img className="icon" src="/images/menu.svg" alt="menu"></img>
          </button>
          <ul
            className={`menu ${
              this.state.isMobile ? 'flex-column' : 'flex-horizontal'
            }`}
            style={navListStyle}
          >
            <li>
              <Link activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/events">
                Events
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/resources">
                Resources
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/docs">
                Documents
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {this.state.showNav && this.state.isMobile && (
            <div
              role="button"
              className="menu-backdrop"
              onClick={this.closeNav}
              tabIndex={0}
            ></div>
          )}
        </nav>
      </header>
    );
  }
}
