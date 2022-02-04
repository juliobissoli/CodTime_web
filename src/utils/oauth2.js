import * as ClientOAuth2 from 'client-oauth2'
import gitla_api from  '../serve/gitlab_api'


import axios from "axios";

const githubAuth = new ClientOAuth2({
    clientId: process.env.VUE_APP_GITLAB_AUTH_CLIENT_ID,//'1553d0633b02b5ad57488049a3a592590e13c88892b36a0a1826f82fd0011389',
    clientSecret: process.env.VUE_APP_GITLAB_AUTH_CLIENT_SECRET ,//'31ebce65b4ef5f6a0e3f38788d2ac3069daed85b79ae1ddf2c546c0a9d128e10',
    accessTokenUri:  process.env.VUE_APP_GITLAB_AUTH_ACCESS_TOKEN_URL,//'https://gitlab.com/oauth/access_token',
    authorizationUri: process.env.VUE_APP_GITLAB_AUTH_AUTHORIZATION_URL, //'https://gitlab.com/oauth/authorize',
    redirectUri:  process.env.VUE_APP_GITLAB_AUTH_REDIRECT_URL, //'http://localhost:8080',
    scopes: ['api']

})

class Oauth2 {


    static login() {

        window.oauth2Callback = function (uri) {
            githubAuth.token.getToken(uri)
                .then(function (user) {
                    return popsicle.request(user.sign({
                        method: 'get',
                        url: 'https://gitlab.com/oauth'
                    })).then(function (res) {
                    })
                })
        }

        window.open(githubAuth.token.getUri())

    }


    static loggedIn() {
        return !!localStorage.getItem("logged");
    }

    static async setAuth(token) {
        localStorage.setItem("token", token);
        localStorage.setItem("logged", true);

        const auth = 'Bearer ' + token
        gitla_api.defaults.headers['Authorization'] = auth;

        console.table(axios.defaults.headers.common)
        console.table(gitla_api.defaults.headers.common)
    }

    static token() {
        return localStorage.getItem("token");
    }

    static logout() {
        localStorage.removeItem("logged");
        localStorage.removeItem("token");
    }
}

export default Oauth2