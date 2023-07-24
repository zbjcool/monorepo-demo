/*
 * @Date: 2023-07-04 09:27:55
 * @LastEditors: bingo 157272494@qq.com
 * @LastEditTime: 2023-07-24 09:41:17
 * @FilePath: /monorepo-demo/packages/@app/project1/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router.config.js'

Vue.use(ElementUi)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
