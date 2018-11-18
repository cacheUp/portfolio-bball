import React from "react";

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Page</h1>
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About</a>
        <a href="/blog">Blogs</a>
        <a href="/cv">CV</a>
      </div>
    );
  }
}

export default Index;
