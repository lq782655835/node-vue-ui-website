import Vue from 'vue'
import VueRouter from 'vue-router'
import YIUI from 'yi-ui'
import 'highlight.js/styles/github.css'

Vue.use(VueRouter)
Vue.use(YIUI)

// Promise Catch不报错
window.addEventListener('unhandledrejection', e => e.preventDefault())
