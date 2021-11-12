import * as types from "../mutationTypes";
import gitlab_api from "../../serve/gitlab_api";

export const setCommits = async ({ commit }, project_id) => {
  return new Promise((resolve, reject) => {
    gitlab_api.get(`projects/${project_id}/repository/commits`).then(
        (res) => {
        resolve(res.data);
        commit(types.SET_COMMIT, res.data);
    },
    error => {
        console.error('Erro no setCommits => ', error)
        reject(error)
    }
    );
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