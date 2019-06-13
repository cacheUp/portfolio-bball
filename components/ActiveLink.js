import React, { Children } from "react";
import { Link } from "../routes";

const ActiveLink = ({ children, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className;
  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
