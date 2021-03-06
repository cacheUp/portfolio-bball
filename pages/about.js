import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import { Row, Col } from "reactstrap";
import { Photo } from "../components/Photo";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Bradley Ball - Learn More About Me"
        {...this.props.auth}
      >
        <BasePage className="about-page">
          {" "}
          <Row className="mt-5">
            <Photo />
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein" id="intro">
                <p>My name is Bradley Ball </p>
                <p>Add about me Text</p>
                <p>Add about me Text</p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
