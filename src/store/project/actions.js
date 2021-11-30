import * as types from "../mutationTypes";
import Projects from "../../data/projects";
import gitlab_api from "../../serve/gitlab_api";
import store from "../index";

export const setProjects = async ({ commit, state }) => {
  // let list =  Projects.projects;

  // commit(types.SET_PROJECT, list)

  return new Promise((resolve, reject) => {
    gitlab_api.get("projects?membership=true&statistics=true&collaborators=true&order_by=last_activity_at").then(
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

export const getProjectDetail = async ({ state, commit }, id) => {
  const projects = state.projects.filter(el => el.id == id)

  return new Promise((resolve, reject) => {
    if (projects.length > 0){
       commit(types.SET_PROJECT_DETAIL, projects[0]);
       resolve(projects[0]);

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
