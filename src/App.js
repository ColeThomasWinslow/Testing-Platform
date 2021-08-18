import "./App.css";
import React, { useState, useMemo } from "react";

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
        <h2>Total Score: {count}</h2>

        <button onClick={ZeroScore}>Reset Score</button>
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
  height: 100vh;
`;
