import axios from "axios";

const api = axios.create({
  baseURL: "https://659a922d652b843dea53bac8.mockapi.io/api/todolist",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
