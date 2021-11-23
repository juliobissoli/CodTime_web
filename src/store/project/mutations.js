import * as types from '../mutationTypes'
import gitlab_api from '../../serve/gitlab_api'


export default {
    [types.SET_PROJECT](state, value) {
      state.projects = value;
    },
    
    [types.SET_PROJECT_DETAIL](state, data){
      // const list = state.projects.filter(el => el.id == id)
      state.project_detail = data 
    },
    
    async [types.SET_PROJECT_COLLABORATES] (state, project_id){
      console.log('Ta aqui ==> ',project_id)
      await gitlab_api.get(`projects/${project_id}/members/all`).then(
        res => {
          state.map_collaborators_project.set(project_id, res.data)
          state.collaborators.push({project_id, list: res.data})
        },
      error => {
        console.error('Erro para buscar os colaboradores => ', error)
      } 
      )
    }
  
    // projects/1/members
  };
