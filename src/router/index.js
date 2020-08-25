import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
//1.先import 名稱 from 路徑（pages 下需要有同名字的vue檔案）
// admin
import Dashboard from '@/components/views/admin/Dashboard';
import Login from '@/components/pages/admin/Login';
import Products from '@/components/pages/admin/Products';
import Orders from '@/components/pages/admin/Orders';
import Coupons from '@/components/pages/admin/Coupons';
import CustomerOrders from '@/components/pages/admin/CustomerOrders';
import CustomerCheckout from '@/components/pages/admin/CustomerCheckout';
// front
import Home from '@/components/views/Home';
import Shopping from '@/components/views/Shopping';
import ProductList from '@/components/pages/front/ProductList';

Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '*',  //若進入未編寫之頁面，強制進入登入頁面
      redirect: 'login',
    },
    //登入頁面
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    //首頁
    {
      path: '/',
      name: 'MainPage',
      component: Home,
    },
    {
      name: 'Shopping',
      path: '/shopping',
      component: Shopping,
      children: [
        {
          path: 'productlist',
          name: 'ProductList',
          component: ProductList,         
        }
      ]
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
        {
         path: 'customer_checkout/:orderId',
         name: 'CustomerCheckout',
         component: CustomerCheckout,
        },
      ],
    },
  ],
});
