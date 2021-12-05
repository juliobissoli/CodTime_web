import gitlab_api from '../../serve/gitlab_api'
import * as types from '../mutationTypes'

export const setMilestone = async ({ commit }, filter) => {

  const { project_id } = filter
  const params = {
    state: filter.state,
    search: filter.search
  }

  let parans = Object.keys(params).filter(el => params[el]).map(el => `${el}=${params[el]}`).join('&')
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