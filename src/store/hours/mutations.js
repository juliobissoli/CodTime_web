import * as types from '../mutationTypes'

export default{

    [types.SET_COMMIT](state, value) {
        state.commits = value;
      },
}