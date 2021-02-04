import React from "react";
import classes from "./FinishedQuiz.module.css";
import Button from "../../components/UI/Button/Button";

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          return (
            <li key={index}>
              <strong> {index + 1} </strong>. &nbsp;
              {props.results[quizItem.id] === "error" ? "+" : "-"}&nbsp;
              {quizItem.question}
            </li>
          );
        })}
      </ul>
      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRetry} type="primary">
          Заново
        </Button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
