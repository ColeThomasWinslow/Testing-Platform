import "./App.css";
import React, { useState, useMemo } from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import NewAccount from "./components/NewAccount";
import Home from "./components/Home";
import TestingPage from "./components/TestingPage";
function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={NewAccount} />
          <Route exact path="/home" component={Home} />
          <Route path="/Test/:id">
            <TestingPage />
          </Route>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
