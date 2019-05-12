import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PortfolioCardDetail extends React.Component {
  render() {
    const { isOpen, toggle, portfolio } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p>
              <b>Description:</b> {portfolio.description}
            </p>
            <p>
              <b>Company:</b> {portfolio.company}
            </p>
            <p>
              <b>Location:</b> {portfolio.location}
            </p>
            <p>
              <b>Start Date:</b> {portfolio.startDate}
            </p>
            <p>
              <b>End Date:</b> {portfolio.endDate}
            </p>
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
