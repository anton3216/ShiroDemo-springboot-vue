import Vue from 'vue'
import Router from 'vue-router'
import queryAllUser from '@/components/queryAllUser'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'queryAllUser',
      component: queryAllUser
    }
  ]
})
