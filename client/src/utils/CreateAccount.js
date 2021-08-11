import axios from "axios";

export const CreateAccount = async (Email, Username, Password) => {
  return axios
    .post("http://localhost:8080/api/auth/register", {
      username: Username,
      password: Password,
      email: Email,
    })
    .catch(function (error) {
      alert("Wrong Credentials");
    });
};
