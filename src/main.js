import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'
import VueDatamaps from 'vue-datamaps'
 
Vue.use(VueDatamaps)

Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
