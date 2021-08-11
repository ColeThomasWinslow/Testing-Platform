import React, { useState, useEffect } from "react";

import { AllTests } from "../utils/AllTests";
import { Link } from "react-router-dom";
function Home() {
  const [Tests, setTests] = useState([]);

  useEffect(() => {
    AllTests().then((result) => {
      setTests(result.data);
    });
  }, []);

  return (
    <div>
      <h2>This is the home Page</h2>

      {Tests.map((test) => {
        return (
          <details key={test._id}>
            <summary>{test.title}</summary> <p>Questions: {test.Test.length}</p>
            <Link to={`/Test/${test._id}`}>
              <button>Take Test</button>
            </Link>
          </details>
        );
      })}
    </div>
  );
}

export default Home;
