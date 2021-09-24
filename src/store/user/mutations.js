import * as types from '../mutationTypes'


export default {

    [types.SET_USER](state, value){
        state.id = value.id,
        state.name = value.name,
        state.username = value.username,
        state.state = value.state,
        state.avatar_url = value.avatar_url,
        state.web_url = value.web_url,
        state.created_at = value.created_at,
        state.bio = value.bio,
        state.email = value.email
    },


}