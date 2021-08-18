import React, { useState } from "react";
import { TestTitles } from "../utils/TestTitles";
import { Link } from "react-router-dom";
function Home() {
  const [Test] = useState(TestTitles);
  return (
    <div>
      <div>
        <h1>Javascript Quizzes</h1>
      </div>
      {Test.map((elm) => {
        return (
          <div key={elm.id}>
            <h3>{elm.testTitle}</h3>
            <p> Number of Questions: {elm.questions}</p>
            <Link to={`/Test/${elm.id}`}>
              <button>Take Test Now</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
