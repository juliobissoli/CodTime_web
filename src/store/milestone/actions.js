import gitlab_api from '../../serve/gitlab_api'
import * as types from '../mutationTypes'

export const setMilestone = async ({ commit }, project_id) => {
    // let list =  Projects.projects;
  
    // commit(types.SET_PROJECT, list)
  
    return new Promise((resolve, reject) =>  {
       gitlab_api.get(`/projects/${project_id}/milestones`).then(
        (res) => {
          commit(types.SET_MILESTONE, res.data)
          resolve(res.data)
        },
        error => {
          console.error("Erro ao capturar um milestone ", error)
        }
      )
    })
  }