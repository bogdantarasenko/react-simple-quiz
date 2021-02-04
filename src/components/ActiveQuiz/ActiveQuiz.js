import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = ({
  state,
  image,
  answers,
  question,
  quizLength,
  answerNumber,
  onAnswerClick
}) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span className={classes.QuestionHeader}>
        <strong>{answerNumber}.</strong>&nbsp;
        {image && <img src={image} className={classes.QuestionImage} />}<br />
        {question}
      </span>
      <small>
        {answerNumber} из {quizLength}
      </small>
    </p>
    <AnswersList
      state={state}
      answers={answers}
      onAnswerClick={onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;
