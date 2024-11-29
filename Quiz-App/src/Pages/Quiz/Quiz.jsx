import React, { useEffect, useState } from "react";
import Question from "../../Componenets/Question/Question";
import "./Quiz.css";
import './Qquery.css'

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {

  // Use states
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  // Use Effect
  useEffect(() => {
    if (questions) {
      setOptions(
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
      );
    }
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    // Header
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          {/* Header */}
          <div className="homeHeader text-center col-12">
            <h1>QUIZ APP</h1>
          </div>

          <div className="quiz">
            <span className="subtitle">Welcome {name}</span>
            <div className="quizInfo">
              <span className="score">Score: {score}</span>
            </div>

            {questions ? (
              <>
                {/* Questions */}
                <Question
                  currQues={currQues}
                  setCurrQues={setCurrQues}
                  questions={questions}
                  options={options}
                  correct={questions[currQues]?.correct_answer}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />

              </>
            ) : (
              <>
                Loading...
              </>
            )}
          </div>
        </div >
      </div >
    </div >
  );
};

export default Quiz;
