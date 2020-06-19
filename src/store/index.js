import Vue from "vue";
import Vuex from "vuex";
// import projectsList from "../data/projetcs";
import api from "../serve/api";
import auth from "../utils/auth";
import jwt_decode from "jwt-decode";

import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isLogged: false,
    projects: [],
    productSelected: null,
    timeRuning: {
      isRuning: false,
      idCommit: null,
      minuts: null,
      date_start: null,
    },
  },
  getters: {
    projects(state) {
      console.log("tatqcxds");
      return state.projects.map((el) => {
        el.total = el.tescks.lenght;
      });
    },
  },
  mutations: {
    selectProject(state, item) {
      state.productSelected = item;
    },
    cleanSelectProject(state) {
      state.productSelected = null;
    },
    startTime(state) {
      state.timeRuning = {
        date_start: moment().format("YYYY-MM-DD HH:mm:ss"),
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
      state.timeRuning.minuts = moment().diff(start, "minutes");
    },

    changeLogged(state, logged) {
      state.isLogged = logged;
    },
    logout(state) {
      state.isLogged = false;
      auth.logout();
    },
    setUser(state, data) {
      state.user = data;
      console.log("set userr");
    },
    setProjects(state, data) {
      state.projects = data;
    },
  },
  actions: {
    async setValues({ commit }) {
      const uid = jwt_decode(auth.token()).uid;

      try {
        await api.get(`/projects/${uid}`).then((res) => {
          commit("setProjects", res.data);
        });
      } catch (error) {
        console.log(e);
      }
      try {
        await api.get(`/users/${uid}`).then((res) => {
          commit("setUser", res.data);
        });
      } catch (e) {
        console.log(e);
      }

      setImmediate(() => {
        commit("changeLogged", true);
      }, 1000);
    },
  },
  modules: {},
});
