import React from "react";
import GitHubIcon from "@material-ui/icons";

import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ActiveLink from "../ActiveLink";

import auth0 from "../../services/auth0";

const BsNavLink = props => {
  const { route, title } = props;
  const className = props.className || "";

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  );
};

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">
      {" "}
      Login{" "}
    </span>
  );
};

const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className="nav-link port-navbar-link clickable"
    >
      {" "}
      Logout{" "}
    </span>
  );
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  renderBlogMenu = () => {
    const { isSiteOwner } = this.props;
    if (isSiteOwner) {
      return (
        <Dropdown
          nav
          className="port-navbar-link port-dropdown-menu"
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
        >
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            Blog
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <BsNavLink
                className="port-dropdown-item"
                route="/blogs"
                title="Blogs"
              />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink
                className="port-dropdown-item"
                route="/blogs/new"
                title="Create A Blog"
              />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink
                className="port-dropdown-item"
                route="/blogs/dashboard"
                title="Blogs Dashboard"
              />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    return (
      <NavItem className="port-navbar-item">
        <BsNavLink route="/blogs" title="Blog" />
      </NavItem>
    );
  };
  render() {
    const { isAuthenticated, user, className } = this.props;
    const { isOpen } = this.state;
    const menuOpenClass = isOpen ? "menu-open" : "menu-close";

    return (
      <div>
        <Navbar
          className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
          color="transparent"
          dark
          expand="md"
        >
          <NavbarBrand className="port-navbar-brand" href="/">
            Bradley Ball
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem className="port-navbar-item">
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/11483018/brad-ball"
                >
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-stack-overflow fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </NavItem>

              <NavItem className="port-navbar-item">
                <a target="_blank" href="https://github.com/cacheUp">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-github fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </NavItem> */}

              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              {/* <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem> */}
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>

              {/* {this.renderBlogMenu()} */}

              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="Resume" />
              </NavItem>
              {!isAuthenticated && (
                <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
        {/* <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style> */}
      </div>
    );
  }
}
