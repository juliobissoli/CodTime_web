import * as types from '../mutationTypes'

export default {
    [types.SET_PROJECT](state, value) {
      state.projects = value;
    },
    
    [types.SET_PROJECT_DETAIL](state, value){
      state.project_detail = value
    }
  };