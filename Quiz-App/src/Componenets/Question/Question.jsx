import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6
import "./Question.css";
import ErrorMessage from "../ErroMessage/ErrorMessage";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    if (selected === i && selected !== correct) return "wrong";
    if (i === correct) return "select";
    return "";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore((prevScore) => prevScore + 1); // Increment score safely
    }
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected !== null) {
      setCurrQues((prevQues) => prevQues + 1);
      setSelected(null);
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions([]);
    navigate("/");
  };

  return (
    <div className="question">
      {/* Show One Question */}
      <div className="singleQuestion">
        <h5 className="Question">Question {currQues + 1} : {questions[currQues]?.question}</h5>

        {/* Options */}
          {/* Erro Message */}
          {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className="options">
          {options?.map((option, index) => (
            <button
              className={`singleOption ${selected && handleSelect(option)}`}
              key={index}
              onClick={() => handleCheck(option)}
              disabled={selected !== null}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="controls">
          <button className=" quitBtn Btn" onClick={handleQuit}>
            Quit
          </button>
          <button className="nextQuestion Btn" onClick={handleNext}>
            {currQues > 8 ? "Submit" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
