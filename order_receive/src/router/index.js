import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import deposit from '../views/deposit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: deposit
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import("../views/Home.vue"),
        children: [
          {
            path: "/orderList",
            name: "orderList",
            component: () => import('../components/orderList.vue')
          },
          {
            path: "/orderReceive",
            name: "orderReceive",
            component: () => import('../components/orderReceive.vue')
          },
          {
            path: "/operation",
            name: "operation",
            component: () => import('../components/operation.vue')
          },
          {
            path: "/appraise",
            name: "appraise",
            component: () => import('../components/appraise.vue')
          },
          {
            path: "/money",
            name: "money",
            component: () => import('../components/money.vue')
          }
        ]
    }
  ]
})
