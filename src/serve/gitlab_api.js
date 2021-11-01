import axios from "axios";

// const token = localStorage.getItem("token");
// const headers = { "PRIVATE-TOKEN": "sVac-PRXRF_FYUEtUykH"};
const headers = { "PRIVATE-TOKEN": process.env.VUE_APP_GITLAB_TOKEN};


const api = axios.create({
  baseURL: process.env.VUE_APP_GITLAB_API_BASE_URL,
  headers,
});
export default api;
