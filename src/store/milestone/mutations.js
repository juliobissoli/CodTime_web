import * as types from '../mutationTypes'
import gitlab_api from '../../serve/gitlab_api'

export default {
    [types.SET_MILESTONE](state, data) {
      state.milestones = data
    },
    
  };