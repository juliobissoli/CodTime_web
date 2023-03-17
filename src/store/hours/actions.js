import * as types from "../mutationTypes";
import gitlab_api from "../../serve/gitlab_api";

export const setCommits = async ({ commit }, projects) => {
  return new Promise((resolve, reject) => {
    
    Promise.all(projects.map((el) => handleGetCommits(el))).then(
      (res) => {
        let list = [];
        res.forEach((el) => {
          list = [...el, ...list];
        });
        commit(types.SET_COMMIT, list);
      },

      (error) => console.error(error)
    );
    // gitlab_api.get(`projects/${project_id}/repository/commits`).then(
    //     (res) => {
        
    //     resolve(res.data);
    //     commit(types.SET_COMMIT, messageres.data);
    // },
    // error => {
    //     console.error('Erro no setCommits => ', error)
    //     reject(error)
    // }
    // );
  });
};
export const cleanNotes = async ({commit}) => {
  commit(types.SET_NOTES, null)
}

export const setNotes = async ({commit}, issue) => {
  return new Promise((resolve, reject) => {
    gitlab_api.get(`projects/${issue.project_id}/issues/${issue.iid}/notes`).then(
        (res) => {
        resolve(res.data);
        commit(types.SET_NOTES, {issue, notes:res.data});
    },
    error => {
        console.error('Erro no setCommits => ', error)
        reject(error)
    }
    );
  });
}

const handleGetCommits = async (project_id) => {
  return await gitlab_api.get(`projects/${project_id}/repository/commits?per_page=3&page=1`).then((res) => {
    return res.data.map(el => ({...el, project_id}));
  });
};