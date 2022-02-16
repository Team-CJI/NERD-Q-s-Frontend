/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class FormUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
      _id: this.props.score?._id,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.state);
    this.props.onHide();
  };

  handleEmail = (event) => {
    this.setState({ title: event.target.value });
  };

  handleScoreChange = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.updateHandler} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>User email</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter User Email"
                  onChange={this.handleEmail}
                  value={this.state.title}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="scoreUpdater">
                <Form.Label>Score Updater</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Score to Update to"
                  onChange={this.handleScoreChange}
                  value={this.state.description}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="info" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
