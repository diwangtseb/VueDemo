import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
      {
        path: '/',
        redirect: '/Login'
      },
      {
        path: '/Login',
        name: 'Login',
        component: () => import('@/components/Login'),
      },
      {
        path: '/HomePage',
        name: 'HomePage',
        component: () => import('@/components/HomePage'),
      },
      {
        path: '/Shop',
        name:'Shop',
        component: ()=>import('@/components/Shop'),
      },
      {
        path: '/ConfirmPay',
        name: 'ConfirmPay',
        component: () => import('@/components/ConfirmPay'),
      },
   ]
})