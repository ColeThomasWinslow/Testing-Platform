import axios from "axios";

export const login = async (Username, Password) => {
  return axios
    .post("http://localhost:8080/api/auth/login", {
      username: Username,
      password: Password,
    })
    .catch(function (error) {
      alert("Wrong Credentials");
    });
};
