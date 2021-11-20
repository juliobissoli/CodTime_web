import * as types from "../mutationTypes";
import gitlab_api from "../../serve/gitlab_api";
import moment from "moment";

export const setTasks = async ({ commit, state }, data) => {
  
  commit(types.SET_FILTER_TASK, data)
  
  const url = state.url;

  if(state.url === state.url_before) return

  return new Promise((resolve, reject) => {

    gitlab_api.get(url).then(
      (res) => {
        const issues = res.data.map((el) => ({
          ...el,
          status:
            el.state === "closed"
              ? 3
              : el.merge_requests_count > 0
              ? 2
              : !el.milestone
              ? 0
              : 1,
          description_lines: el.description ? el.description.split('\n') : [],
          collaborator: el.assignee,
        }));
        commit(types.SET_TASKS, issues);
      },
      (error) => console.error(error)
    );
  });

};


export const setFilter = ({commit}, data) => {
  
  
  commit(types.SET_FILTER_TASK, data)
}
