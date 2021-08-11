import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function TestingPage() {
  const URL = window.location;
  const ID = URL.toString().split("/")[4];
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Test, setTest] = useState([]);
  const [Start, setStart] = useState(false);
  function StartQuiz() {
    setStart((Start) => !Start);
  }
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Test.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  useEffect(() => {
    axios.get(`http://localhost:8080/api/tests/${ID}`).then(
      (result) => {
        setIsLoaded(true);
        console.log(result.data.Test);
        setTest(result.data.Test);
      },

      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, [ID]);

  if (error) {
    return (
      <div>
        <h2>Oops something happened to the Network Connection</h2>
        <p>Try Refreshing the Page ...</p>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div>
        {Start ? (
          <div>
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {Test.length}
                <Link to={`/home`}>
                  {" "}
                  <button>Exit</button>
                </Link>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{Test.length}
                  </div>
                  <div className="question-text">
                    {Test[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {Test[currentQuestion].answerOptions.map((answerOption) => (
                    <button
                      key={answerOption.answerText}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div>
            <p>Click Here To Start Your Quiz</p>
            <button onClick={StartQuiz}>Start</button>
          </div>
        )}
      </div>
    );
  }
}
export default TestingPage;
