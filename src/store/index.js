import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import  HelperData from '../data/helper'
import state from "./project/state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    helper_is_visible: false,
    helper_topic: null,
    helper_url_redirect: null,
    helper_info: null,
    
    new_url: null

  },
  getters: {

    newUrl(state){
      console.log("Teste ==> ", localStorage.getItem("private_base_url"))
      return state.new_url;
      // return "https://gitlab.com"
    },

    mapPriority() {
      return new Map([
        [0, { label: "Alta", badge: "badge-danger" ,class: "danger" }],
        [1, { label: "Media",badge: "badge-warning" ,class: "warning" }],
        [2, { label: "Baixa",badge: "badge-secondary" ,class: "secondary"}]
      ]
      );
    },


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

    helperIsVisible(state){
      return state.helper_is_visible;
    },

    helperInfo(state){
      if(state.helper_url_redirect){
        state.helper_info.redirect  = state.helper_url_redirect
      }
      return state.helper_info ||
      {
        title: "Cadastro de Issues",
        description: "Uma breve descrição sobre oq esse assunto",
        stages: [
          'Como fazer passo 1',
          'Como fazer passo 2',
          'Como fazer passo 3',
        ],
        obs: null,
        image: "nome_da_image",
        redirect: state.url_redirect || 'https://gitlab.com/projects/new',
        doc_url: 'https://docs.gitlab.com/'
      }
    }


  },
  mutations: {
    // logout(state) {
    //   state.isLogged = false;
    //   auth.logout();
    // }
    setHelper(state, data){
      state.helper_is_visible = data.visibility
      state.helper_topic = data.topic
      state.helper_url_redirect = data.url_redirect || null
      if(data.topic){
        state.helper_info = HelperData[data.topic]
      }
      else {
        state.helper_info = null
      }
    },
    setNewUrl(state, url){
      state.new_url = url;
    }
    
  },
  actions: {
    showHelper({commit}, {topic, url_redirect}){
      commit("setHelper", {visibility: true ,topic, url_redirect})
    },

    collapseHelper({commit}){
      commit("setHelper", {visibility: false ,topic: null, url_redirect: null})
    },

    changeNewUrl({commit}, url){
      commit('setNewUrl', url)
    }
  },

  modules
});
