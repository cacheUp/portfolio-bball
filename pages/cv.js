import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import { Row, Col } from "reactstrap";

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} className="cv-page">
        <BasePage title="Preview of my CV">
          {" "}
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  className="btn btn-success"
                  download="bradley_cv.pdf"
                  href="/static/bradley_cv.pdf"
                >
                  Download
                </a>
                <iframe
                  src="/static/bradley_cv.pdf"
                  style={{ width: "100%", height: "800px" }}
                />
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
