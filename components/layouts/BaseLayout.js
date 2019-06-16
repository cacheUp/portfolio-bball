import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title
  } = props;
  const headerType = props.headerType || "default";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>

        <meta
          name="description"
          content="My name is Bradley Ball and I am a software engineer. I love solving problems and collaberating with teammates to get the job done. React is my favorite frontend framework and nodejs is my preferred backend technology."
        />
        <meta
          name="keywords"
          content="bradley ball, bradley ball porfolio, bradley ball developer, bradley, bradley portfolio"
        />
        <script src="https://kit.fontawesome.com/b682f54eb6.js" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
