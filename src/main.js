import Vue from 'vue'

import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import i18n from './languages/index'
import store from './store/index'


Vue.use(Buefy)





Vue.config.productionTip = false



new Vue({
  i18n,
  render: h => h(App),
  store
}).$mount('#app')
