import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ReactPlayer from "react-player";
import { tagArr } from "./portfolioData";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import Link from "next/link";

class PortfolioCardDetail extends React.Component {
  state = {
    chipData: tagArr
  };

  render() {
    const { isOpen, toggle, portfolio } = this.props;
    return (
      <div>
        <Modal
          isOpen={isOpen}
          toggle={toggle}
          size="lg"
          className="modal-wrapper"
          modalClassName="modal-wrapper"
        >
          <ModalHeader toggle={toggle} className="portfolio-modal-header">
            <span className="tech-stack-header">TECH STACK</span>
            {portfolio.tags.map((data, index) => {
              return (
                <Chip
                  style={{ marginLeft: "9px", marginBottom: "5px" }}
                  avatar={
                    <Avatar alt="Natacha" variant="rounded" src={data.link} />
                  }
                  label={data.name}
                  size="medium"
                />
              );
            })}
          </ModalHeader>
          <ModalBody>
            <h2 className="modal-h2-title">{portfolio.name}</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
              {portfolio.video !== null && (
                <ReactPlayer
                  width="450px"
                  url={portfolio.video}
                  controls={true}
                  playing
                />
              )}
              <div>
                <h2
                  style={{
                    fontSize: "30px",
                    textAlign: "center",
                    fontWeight: "bold"
                  }}
                >
                  Description
                </h2>
                <p
                  className={
                    portfolio.video !== null
                      ? "modal-description"
                      : "modal-description2"
                  }
                >
                  {portfolio.description}
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <a href={portfolio.deployUrl}>
              {portfolio.deployUrl !== null && (
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<LanguageIcon fontSize="large" />}
                >
                  Link
                </Button>
              )}
            </a>
            {portfolio.github.length === 1 ? (
              <a href={portfolio.github[0]}>
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<GitHubIcon fontSize="small" />}
                >
                  Github
                </Button>
              </a>
            ) : (
              <div>
                <a href={portfolio.github[0]}>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<GitHubIcon fontSize="small" />}
                  >
                    Frontend Repo
                  </Button>
                </a>
                <a href={portfolio.github[1]}>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<GitHubIcon fontSize="small" />}
                  >
                    Backend Repo
                  </Button>
                </a>
              </div>
            )}
            <Button color="secondary" variant="contained" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;
