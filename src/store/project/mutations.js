import * as types from '../mutationTypes'

export default {
    [types.SET_PROJECT](state, value) {
      state.projects = value;
    },
  
  };