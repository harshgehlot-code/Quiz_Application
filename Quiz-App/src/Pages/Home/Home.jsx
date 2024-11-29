import React, { useState } from 'react';
import '../Home/Home.css';
import '../Home/HQuery.css';
import Cat from '../Cat/Cat';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../Componenets/ErroMessage/ErrorMessage';

const Home = ({ name, setName, fetchQuestions }) => {
  // States of Home page
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  // useNavigate hook from React Router v6
  const navigate = useNavigate();


  // Handle submit
  const handleSubmit = () => {
    if (category || difficulty && name) {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz") // Redirect to /quiz page 
    } else {
      setError(true);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          {/* Header */}
          <div className="homeHeader text-center col-12">
            <h1>QUIZ APP</h1>
          </div>

          {/* Quiz Image */}
          <div className="homeimg col-12 d-flex justify-content-center my-lg-3 my-md-2 my-3">
            <img src="Quiz.svg" className="banner" alt="img" />
          </div>
          <div className="homeSettings text-center col-12 my-lg-1">Settings</div>
          <div className="parentunderline">
            <span className="underline"></span>
          </div>

          {/* Main */}
          <div className="homeMain text-center col-12 d-flex flex-column justify-content-center gap-1">

            {/* Error Message */}
            <div className="ErroMessage">
              {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
            </div>

            {/* Username */}
            <div className="input-group mb-3">
              <span className="inputSize input-group-text" id="basic-addon1">@</span>
              <input
                type="text"
                className="inputSize form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={name}
                onChange={(e) => setName(e.target.value)}  // Update name state
              />
            </div>

            {/* Categories */}
            <Cat
              value={category}
              onChange={(e) => setCategory(e.target.value)} 
            />

            {/* Difficulty */}
            <select
              className="form-select form-select-lg mb-3 inputSize"
              aria-label="Large select example"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}  // Update difficulty state
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            {/* Button */}
            <div className="homeFooter text-center col-12">
              <div className="d-grid gap-2">
                <button
                  className="btn homebtn btn-primary"
                  type="button"
                  onClick={handleSubmit}  // Trigger the form submit
                >
                  START QUIZ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
