import * as types  from '../mutationTypes'
import gitlab_api from '../../serve/gitlab_api'


export const setTasks = async ({ commit, state }) => {

  return new Promise((resolve, reject) => {
    gitlab_api.get(`issues`).then(
      res =>{ 
        const issues = res.data.map(el => ({
          ...el,
          status: el.state === 'closed' ? 3 : !el.milestone ? 0 : 1,
          collaborator: el.assignee
        }))
        commit(types.SET_TASKS, issues)
      },
      error => console.error(error)
    )
  })
}