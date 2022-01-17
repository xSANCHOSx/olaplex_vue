import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/router"
import Flexslider from "flexslider"
import "./assets/styles/styles.scss"
import "./assets/styles/flexslider.css"
import "./assets/js/new.js"

import VueMeta from 'vue-meta'
Vue.use(VueMeta)



new Vue({
  render: h => h(App),
  store, router, Flexslider
}).$mount('#app')
