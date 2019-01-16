import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import axios from "axios";

class Secret extends React.Component {
  constructor() {
    super();
    this.state = {
      secretData: []
    };
  }
  static getInitialProps() {
    const superSecretValue = "Super Secret Stuff";
    return {
      superSecretValue
    };
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3000/api/v1/secret");
    const secretData = res.data;
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
    console.log(this.state);
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
