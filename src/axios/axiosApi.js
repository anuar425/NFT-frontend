import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
  headers: {
    Authorization: "JWT " + localStorage.getItem("access"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
