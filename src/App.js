import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home";
import TestingPage from "./components/TestingPage";

function App() {
  const [count, setCount] = useState(0);
  function AddScore(Amt) {
    setCount(count + Amt);
  }
  function ZeroScore() {
    setCount(0);
  }
  return (
    <AppBox>
      <Router>
        <Aside>
          <img src="/images/Javascript.png" alt="Javascript" />
          <SCORE>Score: {count}</SCORE>
          <p className="Btn" onClick={ZeroScore}>
            Reset Score
          </p>
        </Aside>
        <Route exact path="/" component={Home} />
        <Route path="/Test/:id">
          <TestingPage props={AddScore} />
        </Route>
      </Router>
    </AppBox>
  );
}

export default App;
const AppBox = styled.div`
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
  align-items: baseline;
`;
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
  img {
    width: 150px;
  }
  p.Btn {
    margin-top: 0px;
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
    border-radius: 0px 0px 15px 15px;
    color: black;
    background-position: left;
  }
`;
const SCORE = styled.h2`
  background: black;
  text-transform: uppercase;
  width: 300px;
  padding: 15px;
  text-align: center;

  margin-bottom: 0px;
`;
