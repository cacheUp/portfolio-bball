import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import Chip from "@material-ui/core/Chip";
import ReactPlayer from "react-player";

class PortfolioCardDetail extends React.Component {
  state = {
    chipData: [
      { key: 0, label: "Angular" },
      { key: 1, label: "jQuery" },
      { key: 2, label: "Polymer" },
      { key: 3, label: "React" },
      { key: 4, label: "Vue.js" },
      { key: 0, label: "Angular" },
      { key: 1, label: "jQuery" },
      { key: 2, label: "Polymer" },
      { key: 3, label: "React" },
      { key: 4, label: "Vue.js" }
    ]
  };

  render() {
    const { isOpen, toggle, portfolio } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle} style={{ background: "#ABB2B9" }}>
            <span
              style={{
                display: "grid",
                justifyContent: "center",
                fontSize: "25px"
              }}
            >
              TECH STACK
            </span>
            {this.state.chipData.map((data, index) => {
              return (
                <Chip
                  color="secondary"
                  key={data.key}
                  label={data.label}
                  style={{ marginLeft: "5px" }}
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
                <h2 style={{ fontSize: "20px", textAlign: "center" }}>
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
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;
