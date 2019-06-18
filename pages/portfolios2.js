import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";
import BasePage from "../components/shared/BasePage";
import { Router } from "../routes";
import axios from "axios";
import { Row, Col, Button } from "reactstrap";
import { getPortfolios, deletePortfolio } from "../actions";
import PortfolioCard from "../components/portfolios/PorfolioCard";

class Portfolios2 extends React.Component {
  static async getInitialProps() {
    let portfolios = [];
    try {
      portfolios = await getPortfolios();
    } catch (err) {
      console.error(err);
    }

    return { portfolios };
  }

  navigateToEdit(portfolioId, e) {
    e.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit`);
  }

  displayDeleteWarning(portfolioId, e) {
    e.stopPropagation();
    const isConfirm = window.confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute("/portfolios");
      })
      .catch(err => {
        console.error(err);
      });
  }

  renderPortfolios(portfolios) {
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return portfolios.map((portfolio, index) => {
      return (
        <Col md="4" key={index}>
          <PortfolioCard portfolio={portfolio}>
            {isAuthenticated && isSiteOwner && (
              <React.Fragment>
                <Button
                  onClick={e => this.navigateToEdit(portfolio._id, e)}
                  color="warning"
                >
                  Edit
                </Button>{" "}
                <Button
                  onClick={e => this.displayDeleteWarning(portfolio._id, e)}
                  color="danger"
                >
                  Delete
                </Button>
              </React.Fragment>
            )}
          </PortfolioCard>
        </Col>
      );
    });
  }

  render() {
    const { portfolios } = this.props;
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return (
      <BaseLayout
        cannonical="/portfolios"
        title="Bradley Ball - View My Projects"
        {...this.props.auth}
      >
        <BasePage className="portfolio-page" title="I am Portfolios Page">
          {isAuthenticated && isSiteOwner && (
            <Button
              onClick={() => {
                Router.pushRoute("/portfolios/new");
              }}
              color="success"
              className="create-port-btn"
            >
              {" "}
              create portfolio
            </Button>
          )}
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios2;
