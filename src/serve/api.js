import axios from "axios";

const token = localStorage.getItem("token");
const headers = { Authorization: "Bearer " + token };

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers,
});
export default api;
