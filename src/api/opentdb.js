/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

const getQuestionsFromAPI = async () => {
  try {
    // connect button to this method to change axios.get//
    const response = await axios.get("https://opentdb.com/api.php?amount=10");
    return response.data.results;
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
};

const parseHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const formatChoices = (choices) => choices.map((choice) => ({ text: parseHTML(choice.trim()) }));
const combineAllChoices = (question) =>
  question.correct_answer.split(",").concat(question.incorrect_answers);

const formatQuestion = (question, index) => ({
  id: index,
  category: question.category,
  type: question.type,
  difficulty: question.difficulty,
  text: parseHTML(question.question.trim()),
  choices: formatChoices(combineAllChoices(question)),
  correct: parseHTML(question.correct_answer.trim()),
  incorrect: question.incorrect_answers,
});

const formatAPIQuizData = (questions) =>
  questions.map((question, index) => formatQuestion(question, index));

const createQuizData = async () => {
  try {
    const questions = await getQuestionsFromAPI();
    const formattedQuestions = await formatAPIQuizData(questions);
    return formattedQuestions;
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
};

export { createQuizData };
