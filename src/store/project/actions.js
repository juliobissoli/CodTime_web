import * as types  from '../mutationTypes'
import Projects from '../../data/projects'

export const setProjects = async ({ commit, state }) => {
  const list =  Projects.projects;

  commit(types.SET_PROJECT, list)
}