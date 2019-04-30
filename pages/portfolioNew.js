import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";
import { Row, Col } from "reactstrap";
import { createPortfolio } from "../actions";
import { Router } from "../routes";

class PortfolioNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData, { setSubmitting }) {
    setSubmitting(true);
    createPortfolio(portfolioData)
      .then(portfolio => {
        setSubmitting(false);
        console.log(portfolio);
        this.setState({ error: undefined });
        Router.pushRoute("/portfolios");
      })
      .catch(err => {
        const error = err.message || "server error";
        setSubmitting(false);
        this.setState({ error });
      });
  }
  render() {
    const { error } = this.state;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="I am PortfolioNew Page"
        >
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                error={error}
                onSubmit={this.savePortfolio}
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(PortfolioNew);
