import * as types from "../mutationTypes";
import Projects from "../../data/projects";
import gitlab_api from "../../serve/gitlab_api";
import store from "../index";

export const setProjects = async ({ commit, state }) => {
  // let list =  Projects.projects;

  // commit(types.SET_PROJECT, list)

  return new Promise((resolve, reject) => {
    gitlab_api.get("projects?membership=true&statistics=true").then(
      (res) => {
        commit(types.SET_PROJECT, res.data);
        Promise.all(
          res.data.map((project) =>
            commit(types.SET_PROJECT_COLLABORATES, project.id)
          )
        );

        resolve(res.data);
      },
      (error) => {
        console.log("deu errado ==> ", error);
      }
    );
  });
};

export const setCollaborators = async ({ commit }, list) => {
  await Promise.all(
    list.map((project) => commit(types.SET_PROJECT_COLLABORATES, project.id))
  );
};

export const getProjectDetail = async ({ commit }, id) => {
  console.log("T => ", store.getters.mapProjects);
  const project = store.getters.mapProjects.get(id);

  return new Promise((resolve, reject) => {
    if (project){
       commit(types.SET_PROJECT_DETAIL, project);
       resolve(project);

      }
    else {
      gitlab_api.get(`projects/${id}?statistics=true`).then(
        (res) => {
          commit(types.SET_PROJECT_DETAIL, res.data);
          commit(types.SET_PROJECT_COLLABORATES, parseInt(id));
          resolve(res.data);
        },
        (error) => {
          console.log("error getProjectDetail ", error);
          reject(error);
        }
      );
    }
  });
};
