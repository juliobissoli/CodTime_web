import gitlab_api from '../../serve/gitlab_api'
import * as types from '../mutationTypes'

export const setMilestone = async ({ commit }, filter) => {
  // let list =  Projects.projects;

  // commit(types.SET_PROJECT, list)
  const { project_id } = filter
  filter.project_id = null
  let parans = Object.keys(filter).filter(el => filter[el]).map(el => `${el}=${filter[el]}`).join('&')
  const url = `/projects/${project_id}/milestones` + (parans ? `?${parans}` : '')
  return new Promise((resolve, reject) => {
    gitlab_api.get(url).then(
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