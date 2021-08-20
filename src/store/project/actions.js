import * as types  from '../mutationTypes'
import Projects from '../../data/projects'

export const setProjects = async ({ commit, state }) => {
  const list =  Projects.projects;

  commit(types.SET_PROJECT, list)
}

export const getProjectDetail = async ({ commit }, id) => {
  const body = Projects.projects.filter(el => el.id == id)
  commit(types.SET_PROJECT_DETAIL, body.length > 0 ? body[0] : null)
}