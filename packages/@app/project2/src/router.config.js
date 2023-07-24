/*
 * @Date: 2023-07-24 09:28:12
 * @LastEditors: bingo 157272494@qq.com
 * @LastEditTime: 2023-07-24 09:41:33
 * @FilePath: /monorepo-demo/packages/@app/project1/src/router.config.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('./pages/home/index.vue')
  },
]


const routerMode = 'history'
const createRouter = () =>
  new VueRouter({
    mode: routerMode,
    routes: routes,
  })

const router = createRouter()

export default router
