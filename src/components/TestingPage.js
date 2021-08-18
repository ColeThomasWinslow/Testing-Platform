import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tests } from "../utils/Tests";
function TestingPage(AddScore) {
  const URL = window.location;
  const ID = URL.toString().split("/")[4];

  const [Test] = useState(Tests.filter((test) => test.id == ID)[0].Test);
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

  return (
    <TestingPageBox>
      {Start ? (
        <div>
          {showScore ? (
            <StartBox className="score-section">
              You scored {score} out of {Test.length}
              <Link to={`/`}>
                <p
                  className="Btn"
                  onClick={() => {
                    AddScore.props(score);
                  }}
                >
                  Exit
                </p>
              </Link>
            </StartBox>
          ) : (
            <Question>
              <TopQuestion className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{Test.length}
                </div>
                <div className="question-text">
                  {Test[currentQuestion].questionText}
                </div>
              </TopQuestion>
              <AnswerSection className="answer-section">
                {Test[currentQuestion].answerOptions.map((answerOption) => (
                  <p
                    className="Btn"
                    key={answerOption.answerText}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </p>
                ))}
              </AnswerSection>
            </Question>
          )}
        </div>
      ) : (
        <StartBox>
          <p>Click Here To Start Your Quiz</p>
          <p className="Btn" onClick={StartQuiz}>
            Start
          </p>
        </StartBox>
      )}
    </TestingPageBox>
  );
}

export default TestingPage;
const TopQuestion = styled.div`
  background: black;
  padding: 20px;
  div.question-text {
    margin-top: 25px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
const AnswerSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Question = styled.div`
  border: 10px solid black;
  width: 80vw;
  max-width: 500px;
  border-radius: 10px;

  p.Btn {
    margin-top: 0px;
    border-radius: 5px;
    width: 200px;
    padding: 5px;
    font-size: 12px;
    border: 2px solid black;
    font-weight: bold;
    text-align: center;
    color: black;
    background: linear-gradient(to left, #f7df1e 50%, black 50%) right;
    background-size: 200%;
    transition: 0.3s ease-out;
  }
  p.Btn:hover {
    border: 2px solid #f7df1e;
    color: white;
    background-position: left;
  }
`;
const StartBox = styled.div`
  background: black;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  a {
    text-decoration: none;
  }
  p {
    text-transform: uppercase;
    font-weight: bold;
  }
  p.Btn {
    margin-top: 50px;
    text-transform: Uppercase;
    width: 300px;
    padding: 10px;
    font-size: 12px;
    border: 2px solid #f7df1e;
    font-weight: bold;
    text-align: center;
    color: white;
    background: linear-gradient(to left, black 50%, #f7df1e 50%) right;
    background-size: 200%;
    transition: 0.3s ease-out;
  }
  p.Btn:hover {
    border-radius: 10px;
    color: black;
    background-position: left;
  }
`;
const TestingPageBox = styled.div`
  height: 100vh;
`;
