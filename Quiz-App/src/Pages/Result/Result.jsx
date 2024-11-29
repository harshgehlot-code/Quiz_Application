// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6
import "./Result.css";

const Result = ({ score }) => { // Destructure props here
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!name) {
  //     navigate("/"); // Redirect to homepage if `name` is missing
  //   }
  // }, [name, navigate]);

  return (
    // Header
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="container border border-primary">
        <div className="row">
          {/* Header */}
          <div className="homeHeader text-center">
            <h1>QUIZ APP</h1>
          </div>

          {/* Winner Logo */}
          <div className="WinnerLogo">
            <img src="winLogo.jpg" alt="Winner" />
          </div>

          <div className="result">
            <span className="title">Final Score: {score}</span>
            <div className="ResultBtn Btn" onClick={() => navigate("/")}>
              Go to Homepage
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Result;
