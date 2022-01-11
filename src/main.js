import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/router"
import './assets/styles/styles.scss'
import "./assets/styles/flexslider.css"
import "./assets/fonts/flexslider-icon.ttf"
import "./assets/fonts/flexslider-icon.woff"
import "./assets/js/jquery.flexslider-min.js"
import "./assets/js/new.js"

import VueMeta from 'vue-meta'
Vue.use(VueMeta)


new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')
