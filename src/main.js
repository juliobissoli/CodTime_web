import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import vClickOutside from 'v-click-outside'
import vueDebounce from "vue-debounce";

 
Vue.use(vClickOutside)

Vue.use(vueDebounce);


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

Vue.filter('horusFormatGlobal', function (minutes) {
  if(minutes === 0) return `--`
  else if (!minutes && !isNaN(minutes)) return ''
  // if(minutes < 0) minutes = -1 * minutes
  return minutes < 60
  ? `${minutes < 10 ? '0' : ''}${minutes.toFixed(0)}min`
  : `${Math.trunc(minutes / 60)}:${String(Math.trunc(minutes % 60)).padStart(2, '0')}h`;
})
Vue.filter('fromNowFormatGlobal', function (date) {
  return date ? moment(date).locale(moment.locale()).fromNow() : '--'
})
Vue.filter('fromDateGlobal', function (date) {
  return date ? moment(date).locale(moment.locale()).format('DD/MM/YYYY') : '--'
})

Vue.filter('rangeDateGlobal', function (dates) {
  return dates ? `${moment(dates.date_init).format('DD MMM')} a ${moment(dates.date_end).format('DD MMM YYYY')}` : '--'
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
