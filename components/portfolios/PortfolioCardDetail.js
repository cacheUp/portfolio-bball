import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ReactPlayer from "react-player";
import { tagArr } from "./portfolioData";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import windowDimensions from "react-window-dimensions";

class PortfolioCardDetail extends React.Component {
  state = {
    chipData: tagArr,
    width: 0,
    height: 0
  };

  render() {
    console.log(this.state);
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
            {this.state.chipData.map((data, index) => {
              return (
                <Chip
                  style={{ marginLeft: "9px", marginBottom: "5px" }}
                  avatar={
                    <Avatar alt="Natacha" variant="rounded" src={data[1]} />
                  }
                  label={data[0]}
                  size="medium"
                />
              );
            })}
          </ModalHeader>
          <ModalBody>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
              <ReactPlayer
                width="450px"
                url="https://www.youtube.com/watch?v=ragtQLZW3po"
                controls={true}
              />

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
                <p className="modal-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="contained"
              color="default"
              startIcon={<LanguageIcon fontSize="large" />}
            >
              Link
            </Button>
            <Button
              variant="contained"
              color="default"
              startIcon={<GitHubIcon fontSize="small" />}
            >
              Github
            </Button>
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
