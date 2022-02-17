/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Component } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

const SERVER = process.env.REACT_APP_SERVER;

class FormUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
      // _id: this.props.score?._id,
      formData: {},
      score: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateScore(this.state.formData);
  };

  handleChange = (event) => {
    const field = event.target.name;
    const { value } = event.target.value;
    const { formData } = this.state;
    formData[field] = value;
    // eslint-disable-next-line
    console.log(this.props.auth0.user);
    this.setState({ formData });
  };

  async updateScore(updateScoreId) {
    // eslint-disable-next-line
    console.log("scores", updateScoreId);
    const id = updateScoreId._id;
    let updateScores = [];
    updateScores = this.state.score.map((currentScore) =>
      currentScore._id === updateScoreId._id ? updateScores : currentScore
    );
    this.setState({ score: updateScores });
    // eslint-disable-next-line
    console.log(id);
    const config = {
      data: {
        score: updateScoreId.score,
      },
      method: "put",
      baseURL: `${SERVER}`,
      url: `/scores/${id}`,
    };
    const response = await axios(config);
    // eslint-disable-next-line
    console.log(response);
    this.getScores();
  }

  render() {
    // eslint-disable-next-line
    console.log(this.props);
    return (
      <Modal show={this.props.showUpdateModal} onHide={!this.props.showUpdateModal}>
        <Form data-testid="add-form" onSubmit={this.handleSubmit}>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Update score</Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="New score"
                  data-testid="add-form-description"
                  name="description"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Card.Body>
          </Card>
        </Form>
      </Modal>
    );
  }
}

export default withAuth0(FormUpdateModal);
