import Vue from "vue";
import Vuex from "vuex";
// import projectsList from "../data/projetcs";
import api from "../serve/api";
import auth from "../utils/oauth2";
import jwt_decode from "jwt-decode";
import modules from "./modules";
import gitlab_api from '../serve/gitlab_api'
import * as types from './mutationTypes'
import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // user: null,
    // uid: null,
    // isLogged: false,
    // projects: [],
    // projectsGit: [],
    // projectSelected: null,
    // projectDetail: null,
    // timeRuning: null,
    // loading: null,
    // dataTamp: null,
    // commits: null,

    // token: null,

  },
  getters: {

    // token(state){
    //   return state.token
    // },

    // projects(state) {
    //   return state.projects.map((el) => {
    //     el.total = el.tescks.lenght;
    //   });
    // },
    // isRunning(state) {
    //   return state.timeRuning ? state.timeRuning.is_running : false;
    // },
    // commitList(state) {
    //   return state.commits
    //     ? state.commits
    //     : { data: [], currentPage: null, perPage: 20 };
    // },

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


  },
  mutations: {
    // logout(state) {
    //   state.isLogged = false;
    //   auth.logout();
    // }
  },
  actions: {},
  modules
});
