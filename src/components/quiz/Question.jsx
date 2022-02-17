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
import { Button, ListGroup, ListGroupItem, Alert, Row, Col } from "react-bootstrap";

const results = [];

class Question extends Component {
  onChange(choice, event) {
    event.preventDefault();
    const { setCurrent, setScore, question } = this.props;
    if (choice === question.correct) {
      results.push("✓");
      setScore(this.props.score + 1);
      setCurrent(this.props.current + 1);
    } else if (choice !== question.correct) {
      results.push("X");
      setCurrent(this.props.current + 1);
    } else {
      // eslint-disable-next-line
      console.log("not right or wrong");
      setCurrent(this.props.current + 1);
    }
  }

  shuffleChoices(choices) {
    for (let index = choices.length - 1; index > 0; index--) {
      const index_2 = Math.floor(Math.random() * (index + 1));
      const temp = choices[index];
      choices[index] = choices[index_2];
      choices[index_2] = temp;
    }
    return choices;
  }

  render() {
    const { question } = this.props;
    return (
      <div>
        {results.length === 0 ? (
          <div />
        ) : (
          <Alert bsstyle="small">
            <div className="results">
              <div className="center">
                {results.map((result, index) => {
                  if (result === "X") {
                    return (
                      <span key={`wrong-${index}`} style={style.wrong}>
                        {`   ${result}   `}
                      </span>
                    );
                  }
                  return (
                    <span key={`correct_${index}`} style={style.correct}>
                      {`   ${result}   `}
                    </span>
                  );
                })}
              </div>
            </div>
          </Alert>
        )}
        <Alert>
          <h3>
            <center>{question.text}</center>
          </h3>
          <hr />
          <ListGroup>
            {this.shuffleChoices(question.choices).map((choice, index) => {
              const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
              return (
                <ListGroupItem
                  key={`choice_${index}`}
                  onClick={this.onChange.bind(this, choice.text)}
                >
                  <Button bsstyle="primary" name={question.id} key={`choice_button_${index}`}>
                    {alphabet[index]}
                  </Button>
                  <span className="choice">{choice.text}</span>
                </ListGroupItem>
              );
            })}
          </ListGroup>
          <Row>
            <Col className="category" md={11}>
              <strong>Category: </strong>
              {question.category}
            </Col>
            <Col className="difficulty" md={1}>
              {question.difficulty}
            </Col>
          </Row>
        </Alert>
      </div>
    );
  }
}

const style = {
  correct: {
    color: "#008000",
  },
  wrong: {
    color: "#FF0000",
  },
};

export default Question;
