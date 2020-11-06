import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    username:''
  },
  mutations: {
    //同步方法
    UpdateUsername(state,username){
       state.username = username
    }
  },
  actions: {
    //异步方法
  },
  modules: {
  }
})
 