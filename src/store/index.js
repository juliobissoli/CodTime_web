import Vue from "vue";
import Vuex from "vuex";
// import projectsList from "../data/projetcs";
import api from "../serve/api";
import auth from "../utils/auth";
import jwt_decode from "jwt-decode";
import modules from "./modules";
import gitlab_api from '../serve/gitlab_api'
import * as types from './mutationTypes'
import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    uid: null,
    isLogged: false,
    projects: [],
    projectsGit: [],
    projectSelected: null,
    projectDetail: null,
    timeRuning: null,
    loading: null,
    dataTamp: null,
    commits: null,

    token: null,

  },
  getters: {

    token(state){
      return state.token
    },

    projects(state) {
      return state.projects.map((el) => {
        el.total = el.tescks.lenght;
      });
    },
    isRunning(state) {
      return state.timeRuning ? state.timeRuning.is_running : false;
    },
    commitList(state) {
      return state.commits
        ? state.commits
        : { data: [], currentPage: null, perPage: 20 };
    },

    mapPriority() {
      return new Map([
        [0, { label: "Alta", badge: "badge-danger" ,class: "danger" }],
        [1, { label: "Media",badge: "badge-warning" ,class: "warning" }],
        [2, { label: "Baixa",badge: "badge-secondary" ,class: "secondary"}]
      ]
      );
    },

    // projectList(state){
    //   return state.projectsGit
    // },

    mapGlobalTaskStatusStyle(state) {
      return new Map([
        [-1,  { color: "#666666", background: "RGBA(153, 153, 153, 0.5)",  class: "secondary", action_label: "criado" , label: "solicitado",  status: "solicited" }],
        [ 0,  { color: "#DB717E", background: "RGBA(219, 113, 126, 0.5)",  class: "danger", action_label: "atribuído" , label: "pendente",    status: "pending"   }],
        [ 1,  { color: "#0070F3", background: "RGBA(0, 112, 243, 0.5)",    class: "primary", action_label: "iniciado" ,label: "em andamento",   status: "progress"  }],
        [ 2,  { color: "#BF78CA", background: "RGBA(191, 120, 202, 0.5)",  class: "warning", action_label: "terminado" ,label: "em revisão",     status: "review"    }], 
        [ 3,  { color: "#3FA890", background: "RGBA(167, 241, 224, 0.8)",  class: "success", action_label: "revisado" ,label: "concluídas",  status: "finish"    }]
      ]
      );
    },

    mapGlobalAccessLevel(state) {
      return new Map([
        [10, {label: 'Guest', pt_label: 'Convidado' }],
        [20, {label: 'Reporter', pt_label: 'Relator' }],
        [30, {label: 'Developer', pt_label: 'Desenvolvedor' }],
        [40, {label: 'Maintainer', pt_label: 'Gerente' }],
        [50, {label: 'Owner', pt_label: 'Dono' }],
      ]
      );
    },

    // mapProjects(state){
    //   const map = new Map(state.projectsGit.map(el => [el.id, el]))
    //   return map
    // }
  },
  mutations: {
    //Tamp
    setToken(state, token){
      state.token = token
    },


    setTemp(state, data) {
      state.dataTamp = data;
    },
    cleanTemp(state) {
      state.dataTamp = null;
    },
    //Project
    selectProject(state, item) {
      state.projectSelected = item;
    },

    detailProject(state, item) {
      state.projectDetail = item;
    },
    cleanSelectProject(state) {
      state.projectSelected = null;
    },

    setProjects(state, data) {
      state.projectsGit = data;
    },

    //Ruuning
    setRunnig(state, data) {
      state.timeRuning = data;
      let projetc_id = data.project_id;
      if (data.is_running) {
        const running = state.projects.filter((el) => {
          return el.id == projetc_id;
        });
        console.log(running);
        state.projectSelected = running[0];
      }
    },

    updataRunning(state, data) {
      state.timeRuning = data;
    },

    clockStriking(state) {
      let start = state.timeRuning.date_start;
      state.timeRuning.minuts = moment().diff(start, "minutes");
    },

    //Login
    changeLogged(state, logged) {
      state.isLogged = logged;
    },
    logout(state) {
      state.isLogged = false;
      auth.logout();
    },

    //User
    setUser(state, data) {
      state.user = data;
      state.uid = data.id;
      console.log("set userr");
    },

    //Commits
    setCommits(state, data) {
      state.commits = data;
    },
  },
  actions: {
    setToken({commit}, value){
      const token = auth.token() || value || null
      commit('setToken', token)
    },
    async setValues({ commit }) {
      const uid = jwt_decode(auth.token()).uid;
      const body = {
        fristDate: moment().add(-3, "days").format("YYYY-MM-DD HH:mm"),
        lestDate: moment().add(1, "days").format("YYYY-MM-DD HH:mm"),
      };
      try {
        console.log(body);

        await api.get("/projects/" + uid, { params: body }).then((res) => {
          commit("setProjects", res.data);
        });
      } catch (error) {
        console.log(e);
      }
      try {
        await api.get(`/users/${uid}`).then((res) => {
          commit("setUser", res.data);
          commit("setRunnig", res.data.running);
        });
      } catch (e) {
        console.log(e);
      }

      setImmediate(() => {
        commit("changeLogged", true);
      }, 1000);
    },

    // async getProjects ({commit, state}){
    //   return new Promise((resolve, reject) => {
    //     gitlab_api.get("projects?membership=true&statistics=true&collaborators=true&order_by=last_activity_at").then(
    //       (res) => {
    //         commit('setProjects', res.data)
    //         // Promise.all(  res.data.map(project => commit(types.SET_PROJECT_COLLABORATES, project.id)))
    //         resolve(res.data)
    //       },
    //       error => {
    //         console.error("deu errado ==> ", error)
    //       }
    //       )
    //     })
    // },

    //Running
    async startTime({ commit, state }) {
      let uid = state.uid;
      let body = {
        date_start: moment().format("YYYY-MM-DD HH:mm:ss"),
        project_id: state.projectSelected.id,
        is_running: true,
        minuts: 0,
      };

      try {
        await api.put(`/running_start/${uid}`, body).then((res) => {
          commit("updataRunning", res.data);
        });
      } catch (error) {
        console.error(error);
      }
    },

    async finishTime({ commit, dispatch, state }) {
      let uid = state.uid;

      try {
        await api.put(`/running_stop/${uid}`).then((res) => {
          commit("updataRunning", res.data);
          dispatch("setValues");
        });
      } catch (error) {
        console.error(error);
      }
    },

    //Commit
    async setCommit({ state }, data) {
      let start = state.timeRuning.date_start;
      let time_running = moment().diff(start, "minutes");
      let body = {
        mensage: data.mensage,
        task: data.task,
        task_id: data.task_id,
        project_id: state.projectSelected.id,
        time_start: start,
        time_end: moment().format("YYYY-MM-DD HH:mm:ss"),
        minuts: time_running,
      };
      console.log("vai commitar", body);
      try {
        await api.post(`/commits`, body).then(console.log("commito"));
      } catch (err) {
        console.error(err);
      }
    },

    //Task
    async createTask({ state, commit }, name) {
      const body = {
        project_id: state.projectSelected.id,
        name: name,
      };
      console.log(body);
      try {
        await api.post("/tasks", body).then((res) => {
          commit("setTemp", res.data);
          state.projectSelected.tasks.push(res.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    //Projects
    async createProject({ state, dispatch }, data) {
      const body = {
        ...data,
        user_id: state.uid,
      };
      try {
        await api.post("/projects", body);
        dispatch("setValues");
      } catch (error) {
        console.error(error);
      }
    },
    //Commits
    async getCommits({ state, commit }, { currentPage, perPage }) {
      let project_id = state.projectDetail.id;
      console.log("correntPage", currentPage);
      let body = {
        currentPage: currentPage ? currentPage : 1,
        perPage: perPage ? perPage : 20,
      };

      console.log(body);
      api.get(`/commits/${project_id}`, { params: body }).then((res) => {
        commit("setCommits", res.data);
      });
      try {
      } catch (error) {}
    },
  },
  modules
});
