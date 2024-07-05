import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosBase;
