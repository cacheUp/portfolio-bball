import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Typed from "react-typed";
import { Button, Container, Row, Col } from "reactstrap";

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
    }, 3000);
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;
    return (
      <BaseLayout className="cover" {...this.props.auth} headerType="index">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

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
                        className="image"
                        src="/static/images/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-2.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {console.log(this.props.auth)}
                    {isAuthenticated && (
                      <span>
                        <b>{user.name}</b>
                      </span>
                    )}
                    Welcome to the portfolio website of Bradley Ball. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <div>
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
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
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
