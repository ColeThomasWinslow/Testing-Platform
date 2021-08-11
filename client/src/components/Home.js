import React from "react";

import { AllTests } from "../utils/AllTests";
function Home() {
  function GetData() {
    AllTests();
  }
  return (
    <div>
      <h2>This is the home Page</h2>
      <button onClick={GetData}>Get Data</button>
    </div>
  );
}

export default Home;
