import React from "react";
import Link from "next/link";

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Page</h1>
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
      </div>
    );
  }
}

export default Index;
