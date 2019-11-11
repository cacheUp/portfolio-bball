import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";
import BasePage from "../components/shared/BasePage";
import { Router } from "../routes";
import axios from "axios";
import { Row, Col, Button } from "reactstrap";
import { getPortfolios, deletePortfolio } from "../actions";
import PortfolioCard from "../components/portfolios/PorfolioCard";
import { portfolioData } from "../components/portfolios/portfolioData";

class Portfolios extends React.Component {
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
    return portfolioData.map((portfolio, index) => {
      return (
        <Col md="6" key={index}>
          <PortfolioCard portfolio={portfolio}></PortfolioCard>
        </Col>
      );
    });
  }

  render() {
    const { portfolios } = this.props;
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return (
      <BaseLayout title="Bradley Ball - View My Projects" {...this.props.auth}>
        <BasePage className="portfolio-page">
          <div className="portfolio-header-wrap">
            <h2 className="portfolio-header fadein">
              Welcome to my portfolio page
            </h2>
            <h4 className="portfolio-subheader fadein">
              These are a hand full of my favorite personal/freelance projects
              I've worked on for the last couple years
            </h4>
          </div>
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
