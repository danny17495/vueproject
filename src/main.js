// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import VeeValidate from 'vee-validate';
import {
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';
//引用中文驗證
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
//引用carousel
import VueCarousel from 'vue-carousel';


Vue.config.productionTip = false
Vue.use(VueAxios, axios);

//表單驗證
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

//驗證與中文化引用 ＊注意順序 
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);
//引用VueCarousel
Vue.use(VueCarousel);

Vue.component('Loading', Loading);
//千分位符號引用
Vue.filter('currency', currencyFilter);
//日期格式引用
Vue.filter('date', dateFilter);

//要使用session 必須另外設定 credential
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
//導航守衛
router.beforeEach((to, from, next) => {
  console.log('to', to,'from', from, 'next', next);
  //...
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
    console.log(response.data);
    if (response.data.success) {
      next();
    } else {
      next({
        path: '/login',
      })
    }
    });
  } else {
  next();
  }
});