import axios from "axios";

const token = localStorage.getItem("token");
// console.log('Servico ==> ', token)
const headers = { Authorization: 'Bearer '+ token};
// const headers = { "PRIVATE-TOKEN": process.env.VUE_APP_GITLAB_TOKEN};




const api = axios.create({
  baseURL: process.env.VUE_APP_GITLAB_API_BASE_URL,
  headers,
});
export default api;
