import { Button } from "reactstrap";
import React from "react";

export const ControlMenu = props => {
  return (
    <div className="control-menu">
      <h1 className="title">Write Your Story... </h1>
      <div className="status-box">{props.isSaving ? "Saving..." : "Saved"}</div>
      <Button color="success" onClick={props.save}>
        Save
      </Button>
    </div>
  );
};
