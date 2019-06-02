import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";

class BlogDetail extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          {" "}
          <h1> I am Cv Page </h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
