import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";

class BlogDetail extends React.Component {
  static getInitialProps() {}
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="I am Blog Detail Page"> </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
