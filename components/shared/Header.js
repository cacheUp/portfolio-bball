// import React from "react";
// import Link from "next/link";

// import "../../styles/main.scss";

// class Header extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
// <Link href="/">
//   <a style={{ fontSize: "20px" }}> Home </a>
// </Link>

//         <Link href="/about">
//           <a> About </a>
//         </Link>

//         <Link href="/portfolios">
//           <a> Portfolio </a>
//         </Link>

//         <Link href="/blogs">
//           <a> Blog </a>
//         </Link>

//         <Link href="/cv">
//           <a> CV </a>
//         </Link>
//         <style jsx>
//           {`
//             a {
//               font-size: 20px;
//             }
//             .customClass {
//               color: red;
//             }
//           `}
//         </style>
//       </React.Fragment>
//     );
//   }
// }

// export default Header;
const BsNavLink = () => {
  return (
    <Link href="/">
      <a className="nav-link"> Home </a>
    </Link>
  );
};

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Link from "next/link";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Bradley Ball</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/">
                  <a className="nav-link"> Home </a>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
