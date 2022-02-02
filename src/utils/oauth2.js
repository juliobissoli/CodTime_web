import * as ClientOAuth2 from 'client-oauth2'
import gitla_api from  '../serve/gitlab_api'


import axios from "axios";

// const token = localStorage.getItem("token");
// const headers = { "PRIVATE-TOKEN": "sVac-PRXRF_FYUEtUykH"};
const headers = { "PRIVATE-TOKEN": process.env.VUE_APP_GITLAB_TOKEN };


// const gitla_api = axios.create({
//     baseURL: 'https://gitlab.com',
//     headers,
// });
// export default api;



const githubAuth = new ClientOAuth2({
    clientId: process.env.VUE_APP_GITLAB_AUTH_CLIENT_ID,//'1553d0633b02b5ad57488049a3a592590e13c88892b36a0a1826f82fd0011389',
    clientSecret: process.env.VUE_APP_GITLAB_AUTH_CLIENT_SECRET ,//'31ebce65b4ef5f6a0e3f38788d2ac3069daed85b79ae1ddf2c546c0a9d128e10',
    // accessTokenUri: 'https://github.com/login/oauth/access_token',
    // authorizationUri: 'https://github.com/login/oauth/authorize',
    // redirectUri: 'http://example.com/auth/github/callback',
    accessTokenUri:  process.env.VUE_APP_GITLAB_AUTH_ACCESS_TOKEN_URL,//'https://gitlab.com/oauth/access_token',
    authorizationUri: process.env.VUE_APP_GITLAB_AUTH_AUTHORIZATION_URL, //'https://gitlab.com/oauth/authorize',
    redirectUri:  process.env.VUE_APP_GITLAB_AUTH_REDIRECT_URL, //'http://localhost:8080',
    scopes: ['api']
})

class Oauth2 {


    static login() {


        //     gitla_api.get('/auth',  (req, res) => {
        //     const uri = githubAuth.code.getUri()
        //     console.log(uri)
        //     res.redirect(uri)
        //   })

        // gitla_api.get('/users/auth/gitlab/callback', function (req, res) {
        //     githubAuth.code.getToken(req.originalUrl)
        //         .then(function (user) {
        //             console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }

        //             // Refresh the current users access token.
        //             user.refresh().then(function (updatedUser) {
        //                 console.log(updatedUser !== user) //=> true
        //                 console.log(updatedUser.accessToken)
        //             })

        //             // Sign API requests on behalf of the current user.
        //             user.sign({
        //                 method: 'get',
        //                 url: 'http://example.com'
        //             })

        //             // We should store the token into a database.
        //             return res.send(user.accessToken)
        //         })
        // })

        window.oauth2Callback = function (uri) {
            console.log('Bateu aqui ==> ', uri)
            githubAuth.token.getToken(uri)
                .then(function (user) {
                    console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }

                    // Make a request to the github API for the current user.
                    return popsicle.request(user.sign({
                        method: 'get',
                        url: 'https://gitlab.com/oauth' // não precisa disso
                    })).then(function (res) {
                        console.log(res) //=> { body: { ... }, status: 200, headers: { ... } }
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