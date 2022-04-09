import axios from "axios";

const api = axios.create({
  baseURL: "https://satya-portfolio.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
});

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default api;

export const domainName= "https://satya-portfolio.herokuapp.com/";
// export const domainName= "http://localhost:5000/";
