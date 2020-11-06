import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    username:'',
    payMoney:0,
  },
  mutations: {
    //同步方法
    UpdateUsername(state,username){
       state.username = username
    },
    SwithMoney(state,payMoney){
      state.payMoney=payMoney
    }
  },
  actions: {
    //异步方法
    SwithMoneyAction({commit},val){
      commit("SwithMoney", val)
    }
  },
  modules: {
  }
})
 