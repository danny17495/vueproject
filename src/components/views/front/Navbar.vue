<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- logo -->
    <router-link to="/">
      <img class="logo" src="https://upload.cc/i1/2020/08/31/vDHiMw.png" width="201" height="74" alt="">
      <img class="logoMobile" src="https://upload.cc/i1/2020/08/31/vDHiMw.png" width="105" height="39" alt="">
    </router-link>
    <!-- button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <!-- 撐開排版 -->
      <div class="mr-auto mt-2 mt-lg-0">

      </div>
      <!--  商店  -->
      <div class=" my-2 my-lg-0">
          <router-link class="btn navBtn mh10" to="/shopping/productlist">
            <i class="fas fa-store"></i>
            寶可夢商店
          </router-link>
      </div>
      <!-- 我的最愛 -->
      <div class="nav-item dropdown my-2 my-lg-0">
        <button class="btn btn-block dropdownIcon mh10" id="favorDropdown" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          <i class="fas fa-heart">
            <span v-if="favorLength > 0">{{ favorLength  }}</span>
          </i>
            我的最愛
        </button>
        <!-- 下拉頁面 -->
        <div class="dropdown-menu" aria-labelledby="favorDropdown" style="min-width: 200px">
          <h6>願望清單</h6>
          <table class="table table-sm table-hover">
            <tbody>
              <tr v-for="item in favorites" :key="item.id">
                <td width="50">
                  <i class="fas fa-cart-plus " type="button" @click.stop="addtoCart(item.id, item.num)"></i>
                </td>
                <td @click="toProduct(item.id)">{{ item.title }}</td>
                <td width="50" class="itemDelete">
                  <i class="fas fa-times " type="button" @click.stop="removeFavorItem(item)"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <hr>
          <router-link class="btn btn-danger btn-block p-1" to="/shopping/cartlist">
            結帳去
          </router-link>
        </div>
      </div>

      <!-- 購物車 -->
      <div class="nav-item dropdown">
        <button class="btn btn-block dropdownIcon mh10" id="cartDropdown" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false" @click.prevent="getCart">
          <i class="fas fa-shopping-cart" :class="{'empty': cartLength === 0}">
            <span v-if="cartLength > 0">{{ cartLength }}</span>
          </i>
          購物車
        </button>
        <!-- 下拉頁面 -->
        <div class="dropdown-menu" aria-labelledby="cartDropdown" style="min-width: 200px">
          <h6>已選擇商品</h6>
          <table class="table table-sm table-hover">
            <thead>
              <tr>
                <th></th>
                <th class="">商品名稱</th>
                <th class="">數量</th>
                <th class=" text-center">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <i class="fas fa-trash-alt " type="button" data-toggle="modal"
                    @click.stop="removeCartItem(item.id)"></i>
                </td>
                <td class="" @click.prevent="$router.push(`/shopping/productdetail/${item.product_id}`)">
                  {{ item.product.title }}</td>
                <td class=" text-right">{{ item.qty }}</td>
                <td class=" text-right">{{ item.total | currency }}</td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-danger btn-block" @click="$router.push('/shopping/productlist')"
            v-if="!cartLength || cartLength === 0">購物去</button>
          <button class="btn btn-danger btn-block" @click="$router.push('/shopping/cartlist')" v-else>結帳去</button>
        </div>
      </div>
      <!--  後台管理  -->
      <div class=" my-2 my-lg-0">
        <router-link class="btn span-white navBtn mh10" to="/login">
          <i class="fas fa-cog"></i>
          後台管理
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import $ from 'jquery';

  export default {
    data() {
      return {
        cart: {}, // 購物車資料
        cartLength: '', // 購物車商品筆數
        favorites: {}, // 喜歡商品資料
        favorLength: '', // 喜歡商品資料筆數
        status: {
          loadingItem: '', // 當筆點選商品 id
        },
        // total: 0, // 小計金額
      };
    },
    methods: {
      // 取得購物車
      getCart() {
        const vm = this;
        vm.isLoading = true;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.$http.get(url).then(response => {
          vm.isLoading = false;
          vm.cart = response.data.data;
          vm.cartLength = response.data.data.carts.length;
        });
      },
      // 刪除購物車商品
      removeCartItem(id) {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
        vm.$http.delete(url).then(() => {
          vm.getCart();
          vm.$bus.$emit("updateBag");
        });
      },
      addtoCart(id, qty = 1) { // ES6預設值qty=1
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.isLoading = true;
        const cart = {
          product_id: id,
          qty,
        };
        vm.$http.post(api, {
          data: cart
        }).then((response) => {
          console.log('post', response.data);
          if (!response.data.success) {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
          } else {
            vm.getCart();
            // 重新整理 Navbar 購物車
            vm.$bus.$emit('cart:get');
            vm.$bus.$emit('message:push', '商品已加入購物車', 'success');
          }
          vm.isLoading = false;
        });

      },
      // 取得喜歡的商品
      getFavorites() {
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.favorLength = this.favorites.length;
      },
      // 移除喜歡的商品
      removeFavorItem(product) {
        const index = this.favorites.indexOf(product);
        this.favorites.splice(index, 1);
        // 儲存至 localStorage
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        // 重新整理
        this.$bus.$emit('productFavor:get');
        this.getFavorites();
      },
      toProduct(id) {
        this.$router.push(`/shopping/productdetail/${id}`)
      }
    },
    computed: {},
    beforeRouteUpdate(to, from, next) {
      this.toProduct(to.params.product_id)
      next();
    },
    created() {
      const vm = this;
      vm.getCart();
      vm.$bus.$on('cart:get', (status = 0) => vm.getCart(status));
      vm.getFavorites();
      vm.$bus.$on('favor:get', () => vm.getFavorites());
    },
  };

</script>
