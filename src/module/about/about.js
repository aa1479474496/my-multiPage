import Vue from 'vue'
import App from './App'
import store from './../../store'
import './../../assets/css/index.css'
import './../../assets/css/about.css'
import './../../assets/js/test.js'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
new Vue({
 store,
  render: h => h(App)
}).$mount('#app')