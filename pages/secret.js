import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";

class Secret extends React.Component {
  static getInitialProps() {
    const superSecretValue = "Super Secret Stuff";
    return {
      superSecretValue
    };
  }

  render() {
    const { superSecretValue } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          {" "}
          <h1> {superSecretValue} </h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
