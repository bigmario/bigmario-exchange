import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
