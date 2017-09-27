import Vue from 'vue'
import App from './App'

import './../../assets/css/index.css'
import './../../assets/js/test.js'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

new Vue({
  render: h => h(App)
}).$mount('#app')
