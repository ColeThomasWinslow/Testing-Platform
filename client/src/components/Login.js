import React, { useState, useContext } from "react";
import { login } from "../utils/login";
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  let history = useHistory();
  return (
    <div>
      <h2>Login</h2>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Username"
        id="LoginUsername"
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>Password:</label>
      <input
        placeholder="Password"
        type="text"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        onClick={async () => {
          const user = await login(Username, Password);
          setUser(user);
          {
            user ? history.push("/home") : history.push("/");
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
