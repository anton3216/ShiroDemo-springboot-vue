import Vue from 'vue'
import Router from 'vue-router'
import indexMenu from '@/components/indexMenu'
import queryAllUser from '@/components/users/queryAllUser'
import addUser from '@/components/users/addUser'
import queryAllRole from '@/components/roles/queryAllRole'
import addRole from '@/components/roles/addRole'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/index',
      name: 'indexMenu',
      component: indexMenu,
      children: [
        {
          path: '/queryAllUser',
          name: 'queryAllUser',
          component: queryAllUser
        },
        {
          path: '/addUser',
          name: 'addUser',
          component: addUser
        },
        {
          path: '/queryAllRole',
          name: 'queryAllRole',
          component: queryAllRole
        },
        {
          path: '/addRole',
          name: 'addRole',
          component: addRole
        }
      ]
    }

  ]
})
