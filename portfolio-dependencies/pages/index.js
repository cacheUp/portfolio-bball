import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";

class Index extends SuperComponent {
  static getInitialProps() {
    console.log("props");
    return {};
  }
  render() {
    return (
      <div>
        <BaseLayout>
          <h1>Welcome Page</h1>
        </BaseLayout>
      </div>
    );
  }
}

export default Index;
