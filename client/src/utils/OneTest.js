import axios from "axios";

export const OneTest = async (ID) => {
  return axios.get(`http://localhost:8080/api/tests/${ID}`);
};
