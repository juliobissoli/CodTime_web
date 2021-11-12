import * as types from '../mutationTypes'

export default{

    [types.SET_COMMIT](state, value) {
        value.forEach(el => {
          
          state.commits.push(el);
          
        });
      },

      [types.SET_NOTES](state, value){
        if(value){
          const list = value.notes.map(el => ({
            ...el,
            issue: {
              id: value.issue.id,
              iid: value.issue.iid,
              assignee: value.issue.assignee,
              status: value.issue.status, 
              project_id: value.issue.project_id,
              title: value.issue.title
            }
          }))
          state.notes =  [...state.notes, ...list]
        }
        else {
          state.notes = []}
      }
    

}