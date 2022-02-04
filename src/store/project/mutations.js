import * as types from "../mutationTypes";
import gitlab_api from "../../serve/gitlab_api";

export default {
  [types.SET_PROJECT](state, value) {
    state.projects = value.map((el) => {
      const access_level = el.permissions.project_access
        ? el.permissions.project_access.access_level
        : el.permissions.group_access
        ? el.permissions.group_access.access_level
        : 0;
      return {
        ...el,
        access_level,
        preferential: access_level > 30,
      };
    });
  },

  [types.SET_PROJECT_DETAIL](state, data) {
    // const list = state.projects.filter(el => el.id == id)
    const access_level = data.permissions.project_access
      ? data.permissions.project_access.access_level
      : data.permissions.group_access
      ? data.permissions.group_access.access_level
      : 0;
    state.project_detail = {
      ...data,
      access_level,
      preferential: access_level > 30,
    };
  },

  async [types.SET_PROJECT_COLLABORATES](state, project_id) {
    const collaborators = state.map_collaborators_project.get(project_id);
    if (collaborators) return;

    await gitlab_api.get(`projects/${project_id}/members/all`).then(
      (res) => {
        state.map_collaborators_project.set(project_id, res.data);
        state.collaborators.push({ project_id, list: res.data });
        const colab_ids = state.all_collaborators.map(el => el.id)
        
       res.data.forEach(el => {
        let t = {name: el.name, username: el.username, web_url: el.web_url, avatar_url: el.avatar_url, id: el.id} 
        if(!colab_ids.includes(el.id)) state.all_collaborators.push(t)
       });
     
      },

    
      (error) => {
        console.error("Erro para buscar os colaboradores => ", error);
      }
    );
  },

  // projects/1/members
};
