import React from "react";
import BaseLayout from "./layouts/BaseLayout";

class SuperComponent extends React.Component {
  constructor() {
    super();
    this.someVar = "Just a var";
  }
  alertName(title) {
    alert(title);
  }
  render() {
    return (
      <BaseLayout>
        <div>I am SuperComponent page</div>
      </BaseLayout>
    );
  }
}

export default SuperComponent;
