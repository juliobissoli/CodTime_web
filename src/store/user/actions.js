import * as types from '../mutationTypes'
import gitlab_api from '../../serve/gitlab_api'
import Router from  '../../router'

export const setUser = ({commit}) => {
    return new Promise((resolve, reject) => {
        gitlab_api.get('user').then(
            res => {
                resolve(res.data),
                commit(types.SET_USER, {...res.data, avatar_url: handleGetAvatar(res.data.avatar_url)})
            },
            error => {
                console.error(error);
                Router.push({name: 'Exception',  params: { code: error.response.status }})
                reject(error)
            }
        )
    })
}


const handleGetAvatar = (url) => {
    let str = url.split("s=80")
    return str.length > 1 ? `${str[0]}s=400${str[1]} ` : url
}