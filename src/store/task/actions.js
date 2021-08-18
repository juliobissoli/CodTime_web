import * as types  from '../mutationTypes'

import Tasks from "../../data/task"


export const setTasks = async ({ commit, state }) => {
  const list = Tasks.tasks;

  commit(types.SET_TASKS, list)
}