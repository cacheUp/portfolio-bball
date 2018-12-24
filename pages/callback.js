import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";

class Callback extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1> Verifying Login Data...</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Callback;
