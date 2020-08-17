import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
//1.先import 名稱 from 路徑（pages 下需要有同名字的vue檔案）
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import CustomerOrders from '@/components/pages/CustomerOrders';






Vue.use(Router)

export default new Router({
  routes: [
    //若進入未編寫之頁面，強制進入登入頁面
    {
      path: '*',
      redirect: 'login',
    },
    // //首頁
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: {requiresAuth: true},
    // },
    //登入頁面
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {//2.設定子路徑 path小寫 name可以大寫開頭
         path: 'products',
         name: 'Products',
         //記得選擇components
         component: Products,
         //是否需要登入操作 
         meta: {requiresAuth: true},
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders, 
          meta: {requiresAuth: true},
         },
         {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons, 
          meta: {requiresAuth: true},
         }
      ],
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {//2.設定子路徑 path小寫 name可以大寫開頭
         path: 'customerorders',
         name: 'CustomerOrders',
         //記得選擇components
         component: CustomerOrders,
        },
      ],
    },
  ],
});
