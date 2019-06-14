import React from "react";
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

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className="nav-link port-navbar-link">{title}</a>
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

  renderBlogMenu = () => {
    const { isSiteOwner } = this.props;
    if (isSiteOwner) {
      return (
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret>
            Blogs
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    return <BsNavLink route="/blogs" title="Blog" />;
  };
  render() {
    const { isAuthenticated, user, className } = this.props;

    return (
      <div>
        <Navbar
          className={`port-navbar port-nav-base absolute ${className}`}
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
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                {this.renderBlogMenu()}
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="Cv" />
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
      </div>
    );
  }
}
