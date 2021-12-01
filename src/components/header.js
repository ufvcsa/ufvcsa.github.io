import { Link } from 'gatsby';
import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    // Just defining here
    // Will always be set by setShowNav() when component mounts
    this.state = { showNav: undefined, isMobile: undefined };

    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    // Can only set the showNav state once the component has mounted
    this.initializeStates();
    window.addEventListener('resize', this.initializeStates.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initializeStates.bind(this));
  }

  /**
   * Set the show nav state.
   */
  initializeStates() {
    this.setState({
      showNav: window.innerWidth >= 1024,
      isMobile: window.innerWidth < 1024,
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
            <div role="button" className="menu-backdrop" onClick={this.closeNav.bind(this)} tabIndex={0}></div>
          )}
        </nav>
      </header>
    );
  }
}
