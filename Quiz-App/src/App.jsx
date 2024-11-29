// Import React-Router-Dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import Home, Quiz and Result Component
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'

// import use state and axios
import { useState } from "react";
import axios from "axios";

function App() {

  // Use States
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  // FetchQuestions using API by axios
  const fetchQuestions = async (category = '', difficulty = '') => {
    const categoryParam = category ? `&category=${category}` : '';
    const difficultyParam = difficulty ? `&difficulty=${difficulty}` : '';
    const url = `https://opentdb.com/api.php?amount=10${categoryParam}${difficultyParam}&type=multiple`;

    try {
      const { data } = await axios.get(url);
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // React-router-Dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home
        name={name}
        setName={setName}
        fetchQuestions={fetchQuestions}
      />,
    },
    {
      path: "/quiz",
      element: <Quiz
        name={name}
        questions={questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
      />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);

  return (
    // Use React-Route-Dom
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App