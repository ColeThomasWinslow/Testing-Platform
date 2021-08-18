import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Tests } from "../utils/Tests";
function TestingPage(AddScore) {
  const URL = window.location;
  const ID = URL.toString().split("/")[4];

  const [Test] = useState(Tests.filter((test) => (test.id = ID))[0].Test);
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
  // console.log(Test);
  // console.log(AddScore.props);
  return (
    <div>
      {Start ? (
        <div>
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {Test.length}
              <Link to={`/`}>
                <button
                  onClick={() => {
                    AddScore.props(score);
                  }}
                >
                  Exit
                </button>
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

export default TestingPage;
