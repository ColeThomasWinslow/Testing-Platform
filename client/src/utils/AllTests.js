import axios from "axios";

export const AllTests = async () => {
  return axios.get("http://localhost:8080/api/all").then((result) => {
    console.log(result.data);
  });
};
