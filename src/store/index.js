import Vue from "vue";
import Vuex from "vuex";
import projectsList from "../data/projetcs";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: projectsList.projects,
    productSelected: null,
  },
  mutations: {
    selectProject(state, item) {
      state.productSelected = item;
    },
  },
  actions: {},
  modules: {},
});
