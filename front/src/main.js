import Vue from 'vue'
import store from './vuex'
import App from './components/App'

Vue.config.debug = true
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
