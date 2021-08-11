import React, { useState, useContext } from "react";
import { CreateAccount } from "../utils/CreateAccount";
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
function NewAccount() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);
  let history = useHistory();
  return (
    <div>
      <h2>Create New Account</h2>
      <label>Create A Username:</label>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <label> Email:</label>
      <input
        type="text"
        placeholder=" Enter your Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label> Create Password:</label>
      <input
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        onClick={async () => {
          const user = await CreateAccount(Email, Username, Password);
          setUser(user);
          {
            user ? history.push("/home") : history.push("/");
          }
        }}
      >
        Create New Account
      </button>
    </div>
  );
}

export default NewAccount;
