import React from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p />

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
