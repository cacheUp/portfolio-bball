import React, { Children } from "react";
import { Link } from "../routes";
import { withRouter } from "next/router";

const ActiveLink = ({ children, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className;
  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
