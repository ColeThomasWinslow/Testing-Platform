import React, { useState } from "react";
import { TestTitles } from "../utils/TestTitles";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Home() {
  const [Test] = useState(TestTitles);
  return (
    <div>
      <Header>
        <h2>Javascript Quizzes </h2>
        <p>TEST YOUR JAVASCRIPT SKILLS</p>
      </Header>
      <AllTestsBox>
        {Test.map((elm) => {
          return (
            <OneTest key={elm.id}>
              <Top>
                <h4>{elm.testTitle}</h4>
                <p> Questions: {elm.questions}</p>
              </Top>
              <Link to={`/Test/${elm.id}`}>
                <p className="Btn">Start Quiz Now</p>
              </Link>
            </OneTest>
          );
        })}
      </AllTestsBox>
    </div>
  );
}

export default Home;
const AllTestsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 200px;
  color: #f7df1e;
`;
const Top = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  h4 {
    text-transform: uppercase;
    margin-right: 20px;
  }
`;
const OneTest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background: black;
  width: 80vw;
  max-width: 600px;
  border-radius: 10px;
  &:hover {
    box-shadow: #ffffffa5 0px 0px 20px;
  }
  a {
    text-decoration: none;
  }
  p.Btn {
    margin-top: 0px;
    border-radius: 5px;
    width: 200px;
    padding: 5px;
    font-size: 12px;
    border: 2px solid #f7df1e;
    font-weight: bold;
    text-align: center;
    color: black;
    background: linear-gradient(to left, #f7df1e 50%, black 50%) right;
    background-size: 200%;
    transition: 0.3s ease-out;
  }
  p.Btn:hover {
    border-radius: 15px;
    color: white;
    background-position: left;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  h2 {
    margin: 0px;
  }
`;
