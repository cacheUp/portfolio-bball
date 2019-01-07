import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";

class Secret extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          {" "}
          <h1> I am Secret Page </h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
