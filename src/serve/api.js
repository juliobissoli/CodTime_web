import axios from "axios";

const token = localStorage.getItem("token");
const headers = { Authorization: "Bearer " + token };

const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers,
});
export default api;
