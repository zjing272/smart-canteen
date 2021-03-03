import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false


Vue.use(ElementUI, {zIndex: 3000})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
