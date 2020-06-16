import Vue from "vue";
import Vuex from "vuex";
import projectsList from "../data/projetcs";
import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: projectsList.projects,
    productSelected: null,
    timeRuning: {
      isRuning: false,
      idCommit: null,
      minuts: null,
      date_start: null,
    },
  },
  mutations: {
    selectProject(state, item) {
      state.productSelected = item;
    },
    cleanSelectProject(state) {
      state.productSelected = null;
    },
    startTime(state, timeNow) {
      state.timeRuning = {
        date_start: timeNow,
        minuts: 0,
        isRuning: true,
        idCommit: 1,
      };
    },
    finishTime(state) {
      state.timeRuning = {
        date_start: null,
        minuts: 0,
        isRuning: false,
        idCommit: null,
      };
    },
    clockStriking(state) {
      let start = state.timeRuning.date_start;
      let now = moment();
      state.timeRuning.minuts = moment().diff(start, "minutes");
      console.log(start, now);
    },
  },
  actions: {},
  modules: {},
});
