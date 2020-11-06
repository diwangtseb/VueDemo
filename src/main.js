import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import QRCode from 'qrcodejs2'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$QRCode=function(val){
  new QRCode("qrcode",{
    width:232,
    height:232,
    text:val
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
