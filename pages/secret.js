import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import axios from "axios";
import { getSecretData } from "../actions";

class Secret extends React.Component {
  state = {
    secretData: []
  };
  static getInitialProps() {
    const superSecretValue = "Super Secret Stuff";
    return {
      superSecretValue
    };
  }

  async componentDidMount() {
    const secretData = await getSecretData();

    this.setState({
      secretData
    });
  }

  displaySecretData = () => {
    const { secretData } = this.state;
    if (secretData && secretData.length > 0) {
      return secretData.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ));
    }
    return null;
  };
  render() {
    const { superSecretValue } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          {" "}
          <h1> {superSecretValue} </h1>
          {this.displaySecretData()}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
