import * as types from '../mutationTypes'

export default{

    [types.SET_COMMIT](state, value) {
        console.log('commits:',value )
        value.forEach(el => {
          
          state.commits.push(el);
          
        });
      },
}