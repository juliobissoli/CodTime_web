import axios from "axios";

// const token =  'glpat-MiFnvixhZSCsza2Yc_16' //localStorage.getItem("token");
const token =  localStorage.getItem("token");
// const private_base_url = 'https://gitlab.labes.inf.ufes.br' //localStorage.getItem("private_base_url")
const private_base_url = localStorage.getItem("private_base_url")
const headers = { Authorization: 'Bearer '+ token};
// const private_base_url =   'https://gitlab.labes.inf.ufes.br'//localStorage.getItem("private_base_url")
// const headers = { Authorization: 'Bearer glpat-uwGrSEhNogbhf-WMJyLR'};

const api = axios.create({
  baseURL: (private_base_url || process.env.VUE_APP_GITLAB_API_BASE_URL) + '/api/v4',
  headers,
});
export default api;