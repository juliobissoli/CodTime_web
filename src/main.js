import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

import "./assets/Icons/icons.scss";

moment.locale("pt-br");

Vue.config.productionTip = false;

Vue.filter('formatFloatGlobal', function (value) {
  if(value === 0) return `0,00`
  else if (!value && !isNaN(value)) return ''
  return  value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
