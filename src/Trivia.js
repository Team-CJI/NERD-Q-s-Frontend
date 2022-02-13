/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React, { Component } from "react";
import axios from "axios";
import QuestionList from "./components/quiz/QuestionList";
import Scorebox from "./components/quiz/Scorebox";
import Results from "./components/quiz/Results";
import "./Trivia.css";
import { createQuizData as quizData } from "./api/opentdb";

const SERVER = process.env.REACT_APP_SERVER;
console.log(SERVER);

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0,
      current: 0,
      loading: undefined,
    };
  }

  setCurrent(current) {
    this.setState({ current });
  }

  // CRUD: Post Scores //
  async submitScore(score) {
    const newScore = {
      score: `${score}`,
      email: "cedric@devhub.com",
    };
    console.log(typeof score);
    // const config = {
    //   data: score,
    //   method: "post",
    //   baseURL: `${SERVER}`,
    //   url: `/scores`,
    // };
    // console.log(config);
    // await axios(config);
    // this.setState({ score });
    await axios.post(`${SERVER}/scores`, newScore);
  }

  // CRUD: Put Scores //
  updateScore(score) {
    console.log("something");
  }

  // CRUD: Delete Scores //
  deleteScore(score) {
    console.log("something");
  }

  // CRUD: Get Scores //
  getScore(score) {
    console.log("something");
  }

  setScore(score) {
    this.setState({ score });
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      this.setState({ questions: await quizData(), loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.loading === false) {
      if (this.state.current >= this.state.questions.length) {
        var scorebox = "";
        var results = <Results {...this.state} />;
        this.submitScore(this.state.score);
      } else {
        scorebox = <Scorebox {...this.state} />;
        results = "";
      }
      return (
        <div>
          {scorebox}
          <QuestionList
            {...this.state}
            setCurrent={this.setCurrent.bind(this)}
            setScore={this.setScore.bind(this)}
          />
          {results}
        </div>
      );
    }
    return null;
  }
}

export default Trivia;
