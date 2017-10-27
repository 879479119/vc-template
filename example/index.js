import Vue from 'vue'
import App from './App.vue'
import '../assets/index.less'
Vue.config.productionTip = false

new Vue({
  render: create => create(App),
}).$mount('#container')
