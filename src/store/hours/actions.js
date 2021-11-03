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
