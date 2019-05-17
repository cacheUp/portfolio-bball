import { Button } from "reactstrap";
import React from "react";

export const ControlMenu = props => {
  return (
    <div className="control-menu">
      <h1>Write Your Story... </h1>
      <div className="status-box">Saved</div>
      <Button color="success">Save</Button>
    </div>
  );
};
