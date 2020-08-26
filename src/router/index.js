import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
          // 預設主頁
          {
            path: '*',  // 若進入的頁面非設定的頁面，會被重新導向
            redirect: '/',  
          },

          {
            name: 'MainPage',
            path: '/',
            component: () => import('@/components/views/Home'),
          },

          {
            name: 'Shopping',
            path: '/shopping',
            component: () => import('@/components/views/Shopping'),
              children: [
                  {   // /shopping/shopping_prod
                    name: 'ProductList',
                    path: 'productlist',
                    component: () => import('@/components/pages/front/ProductList'),  
                  },
                  {   // /shopping/ProductDetail/:product_id
                    name: 'ProductDetail',
                    path: 'productdetail/:product_id',
                    component: () => import('@/components/pages/front/ProductDetail'),  
                  },
                  {  // /shopping/cartlist
                    name: 'CartList',
                    path: 'cartlist',
                    component: () => import('@/components/pages/front/CartList'),  
                  },
                  {  // /shopping/OrderPayment
                    name: 'OrderPayment',
                    path: 'OrderPayment',
                    component: () => import('@/components/pages/front/OrderPayment'),  
                  },
                  {  // /shopping/OrderInfo
                    name: 'OrderInfo',
                    path: 'OrderInfo/:order_id',
                    component: () => import('@/components/pages/front/OrderInfo'),  
                  },
              ],
          },

          {
            name: 'Login',
            path: '/login',
            component: () => import('@/components/pages/admin/Login'),
          },
          {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/components/views/admin/Dashboard'),
            children:[
            {
                name: 'CustomerOrders',
                path: 'customerorders',
                component: () => import('@/components/pages/admin/customerOrders'),
                // meta: { requiresAuth: true },  // 放至此處為確保進入此頁面時，需要被驗證
            },
                ],
          },
          {
            name: 'Dashboard',
            path: '/admin',
            component: () => import('@/components/views/admin/Dashboard'),
              children: [
                {
                  name: 'Products',
                  path: 'products',
                  component: () => import('@/components/pages/admin/Products'),
                  meta: { requiresAuth: true },  // 放至此處為確保進入此頁面時，需要被驗證
                },
                {
                  name: 'Orders',
                  path: 'orders',
                  component: () => import('@/components/pages/admin/Orders'),
                  meta: { requiresAuth: true },  // 放至此處為確保進入此頁面時，需要被驗證
                },
                {
                  name: 'Coupons',
                  path: 'coupons',
                  component: () => import('@/components/pages/admin/Coupons'),
                  meta: { requiresAuth: true },  // 放至此處為確保進入此頁面時，需要被驗證
                }, 
              ],
          },
  ];

  const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition;
      }
      return { x: 0, y: 0 };
    },
  });

  export default router