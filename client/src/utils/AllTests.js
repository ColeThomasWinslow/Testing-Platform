import axios from "axios";

export const AllTests = async () => {
  return axios.get("http://localhost:8080/api/tests");
};