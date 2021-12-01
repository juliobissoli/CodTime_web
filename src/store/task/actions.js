import * as types from "../mutationTypes";
import gitlab_api from "../../serve/gitlab_api";

export const setTasks = async ({ commit, state }, data) => {
  commit(types.SET_FILTER_TASK, data);
  let url = state.url;

  if (state.url === state.url_before) return;
  //Limpa as issues remanecentes
  commit(types.SET_TASKS, []);

  return new Promise((resolve, reject) => {
    if (!Array.isArray(data.project_id)) url = [url];
    Promise.all(url.map((el) => handleGetTask(el))).then(
      (res) => {
        let list = [];
        res.forEach((el) => {
          list = [...el, ...list];
        });

        commit(types.SET_TASKS, list);
      },

      (error) => console.error(error)
    );

    // else {
    //   gitlab_api.get(url).then(
    //     (res) => {
    //       commit(types.SET_TASKS, res.data);
    //     },
    //     (error) => console.error(error)
    //   );
    // }
  });
};

const handleGetTask = async (url) => {
  return await gitlab_api.get(url).then((res) => {
    return res.data;
  });
};

export const setFilter = ({ commit }, data) => {
  commit(types.SET_FILTER_TASK, data);
};
