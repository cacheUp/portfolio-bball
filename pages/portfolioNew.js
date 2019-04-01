import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";
import { Row, Col } from "reactstrap";
import { createPortfolio } from "../actions";

class PortfolioNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData) {
    createPortfolio(portfolioData)
      .then(portfolio => {
        console.log(portfolio);
        this.setState({ error: undefined });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err.response.data.message });
      });
  }
  render() {
    const { error } = this.state;
    console.log(error);
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
