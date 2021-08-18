import * as types from '../mutationTypes'

export default {
    [types.SET_TASKS](state, value) {
      state.tasks = value;
    },
  
  };