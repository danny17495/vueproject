import Vue from 'vue';

//定義一個新的vue實例
Vue.prototype.$bus = new Vue();

//message
//vm.$bus.$emit('message:push', message, status);
//message(String): 訊息內容
//status(String): Alert 的樣式