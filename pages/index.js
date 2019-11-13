import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Typed from "react-typed";
import { Button, ButtonGroup, Container, Row, Col } from "reactstrap";
import { Link } from "../routes";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipping: false
    };
    this.roles = [
      "Fullstack Developer",
      "Reactjs",
      "Nodejs",
      "GraphQL",
      "Socket.io",
      "MongoDB",
      "SQL"
    ];
  }
  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard = () => {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({ isFlipping: !this.state.isFlipping });
    }, 5000);
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;
    return (
      <BaseLayout
        className={`${isFlipping ? "cover-1" : "cover-0"}`}
        {...this.props.auth}
        headerType="index"
        title="Bradley Ball - Portfolio"
        xxxx={true}
      >
        <div className="main-section">
          {/* <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div> */}

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        alt="guy prgramming welcom picture"
                        className="image"
                        src="https://res.cloudinary.com/cloud-9/image/upload/v1573631073/portfolio-tags/section-1.jpg"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history..
                        </div>
                      </div>
                      <img
                        alt="guy prgramming welcom picture"
                        className="image"
                        src="https://res.cloudinary.com/cloud-9/image/upload/v1573631079/portfolio-tags/section-2.jpg"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && (
                      <span className="skinny-h1">
                        <b>{user.name}, </b>
                      </span>
                    )}
                    Welcome to the portfolio website of Bradley Ball. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <div className="self-typed">
                  <Typed
                    loop
                    typeSpeed={60}
                    backSpeed={60}
                    strings={this.roles}
                    shuffle={false}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                  />
                </div>
                <div className="hero-welcome-bio index-btn-wrapper">
                  <h2>Let's take a look on my work.</h2>

                  <div className="">
                    <Link route="/portfolios">
                      <a>
                        <Button className="index-btn">Portfolio</Button>
                      </a>
                    </Link>
                    <Link route="/cv">
                      <Button className="index-btn">Resume</Button>
                    </Link>
                    {/* <Button className="index-btn">Contact</Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
