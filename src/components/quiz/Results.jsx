/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Button, Alert } from "react-bootstrap";
import AnswerKey from "./AnswerKey";

class Results extends Component {
  createScoreMessage(percent) {
    let message = "";
    if (percent === 100) {
      message = "Perfect Score!";
    } else if (percent > 80) {
      message = "Awesome Job!";
    } else if (percent < 80 && percent > 60) {
      message = "You Did Ok!";
    } else {
      message = "Don't Quit your Day Job!";
    }
    return message;
  }

  render() {
    const percent = (this.props.score / this.props.questions.length) * 100;
    return (
      <div>
        <Alert>
          <center>
            <h4>
              You Got {this.props.score} out of {this.props.questions.length} Correct
            </h4>
            <h1>{percent}%</h1>
            <hr />
            <h2>{this.createScoreMessage(percent)}</h2>
          </center>
          <hr />
          <center>
            <Button bsstyle="success" href="/">
              Take Again
            </Button>
          </center>
        </Alert>
        <Alert>
          <center>
            <h3>Answer Key</h3>
          </center>
          <hr />
          <AnswerKey questions={this.props.questions} />
        </Alert>
      </div>
    );
  }
}

export default Results;
