import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/Login'


Vue.use(Router)

export default new Router({
  routes: [
    //若進入未編寫之頁面，強制進入登入頁面
    {
      path: '*',
      redirect: 'login',
    },
    //首頁
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {requiresAuth: true},
    },
    //登入頁面
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
})
