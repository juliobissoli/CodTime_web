import * as ClientOAuth2 from "client-oauth2";
import gitla_api from "../serve/gitlab_api";
import store from "../store/index";

import axios from "axios";

class Oauth2 {
  static login(url_private) {
    const githubAuth = new ClientOAuth2({
      clientId: process.env.VUE_APP_GITLAB_AUTH_CLIENT_ID, //'1553d0633b02b5ad57488049a3a592590e13c88892b36a0a1826f82fd0011389',
      clientSecret: process.env.VUE_APP_GITLAB_AUTH_CLIENT_SECRET, //'31ebce65b4ef5f6a0e3f38788d2ac3069daed85b79ae1ddf2c546c0a9d128e10',
      accessTokenUri:   (url_private? url_private  : process.env.VUE_APP_GITLAB_API_BASE_URL) + "/oauth/access_token", //process.env.VUE_APP_GITLAB_AUTH_ACCESS_TOKEN_URL,//'https://gitlab.com/oauth/access_token',
      authorizationUri: (url_private ? url_private : process.env.VUE_APP_GITLAB_API_BASE_URL) + "/oauth/authorize", //process.env.VUE_APP_GITLAB_AUTH_AUTHORIZATION_URL, //'https://gitlab.com/oauth/authorize',
      redirectUri: process.env.VUE_APP_GITLAB_AUTH_REDIRECT_URL, //'http://localhost:8080',
      scopes: ["api"],
    });


    if(store.getters.newUrl) localStorage.setItem("private_base_url", store.getters.newUrl);
    window.open(githubAuth.token.getUri());
  }

  static loggedIn() {
    return !!localStorage.getItem("logged");
  }


  static async setAuth(token) {
    localStorage.setItem("token", token);
    localStorage.setItem("logged", true);
    const auth = "Bearer " + token;
    gitla_api.defaults.headers["Authorization"] = auth;


    const private_base_url = localStorage.getItem("private_base_url")
    const baseURL = private_base_url || process.env.VUE_APP_GITLAB_API_BASE_URL + '/api/v4';
    gitla_api.defaults.headers["baseURL"] = baseURL;

    console.table(axios.defaults.headers.common);
    console.table(gitla_api.defaults.headers.common);
  }

  static token() {
    return localStorage.getItem("token");
  }

  static logout() {
    localStorage.removeItem("logged");
    localStorage.removeItem("token");
    localStorage.removeItem("private_base_url")
    
    const baseURL =  process.env.VUE_APP_GITLAB_API_BASE_URL + '/api/v4';
    gitla_api.defaults.headers["baseURL"] = baseURL;
  }
}

export default Oauth2;
