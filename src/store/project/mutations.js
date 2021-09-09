import * as types from '../mutationTypes'
import gitlab_api from '../../serve/gitlab_api'


export default {
    [types.SET_PROJECT](state, value) {
      state.projects = value;
    },
    
    [types.SET_PROJECT_DETAIL](state, value){
      state.project_detail = value
    },
    
    async [types.SET_PROJECT_COLLABORATES] (state, project_id){
      console.log("Pid==> ",project_id)
      await gitlab_api.get(`projects/${project_id}/members`).then(
        res => {
          state.map_collaborators_project.set(project_id, res.data)
        }
      )
    }
  
    // projects/1/members
  };
