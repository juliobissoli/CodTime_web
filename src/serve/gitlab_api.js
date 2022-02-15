import axios from "axios";

const token = localStorage.getItem("token");
const private_base_url = localStorage.getItem("private_base_url")
const headers = { Authorization: 'Bearer '+ token};

const api = axios.create({
  baseURL: private_base_url || process.env.VUE_APP_GITLAB_API_BASE_URL + '/api/v4',
  headers,
});
export default api;
