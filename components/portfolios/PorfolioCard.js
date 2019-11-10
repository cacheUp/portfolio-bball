import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardImg
} from "reactstrap";
import { tagArr } from "./portfolioData";
import PortfolioCardDetail from "./PortfolioCardDetail";

export default class PortfolioCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  render() {
    const { portfolio, children } = this.props;
    const { isOpen } = this.state;
    return (
      <span onClick={this.handleToggle}>
        <PortfolioCardDetail
          toggle={this.handleToggle}
          portfolio={portfolio}
          isOpen={isOpen}
        />
        <Card className="portfolio-card fadein">
          {/* <CardHeader className="portfolio-card-header">Geopins</CardHeader> */}

          <CardImg
            src="../../static/images/geopins.png"
            className="portfolio-img"
          />
        </Card>
      </span>
    );
  }
}
