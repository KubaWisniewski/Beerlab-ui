import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "X-Auth-Token": localStorage.getItem("token"),
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
