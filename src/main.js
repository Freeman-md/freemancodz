import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'



import JQuery from 'jquery'
window.$ = JQuery

AOS.init()

createApp(App).use(store).use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}).mount('#app')