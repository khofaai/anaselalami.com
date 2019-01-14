import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Element from 'element-ui'
import './plugins/element.js'
// import './element-variables.scss'

Vue.use(Element)


new Vue({
  render: h => h(App),
}).$mount('#app')
