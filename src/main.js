import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false
const options = {
  connect: 'ws//localhost:3001/ws'
};
new Vue({
  router,
  vuetify,
  VueNativeSock,
  options,
  render: h => h(App)
}).$mount('#app')
