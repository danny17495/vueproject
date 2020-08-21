<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light font-weight-bold" style="background-color: #000000">
            <router-link to="/">
                <img class="logo" src="@/assets/images/logo.png" width="150" height="80" alt="">
                <!-- <img class="logoMobile" src="@/assets/images/logo.png" width="" height="" alt=""> -->
            </router-link>
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav ml-3 ml-auto h5 ">
                    <li class="nav-item ml-3 h5 ">
                        <router-link class="nav-link btn" to="/shopping/productlist">
                        <i class="fas fa-store-alt" style="color:white"></i>
                        <span style="color: #FFFFFF;display: inline-block;">讀味去</span>
                        </router-link>
                    </li>
                </ul>
                <!-- 我的最愛 -->
                <div class="dropdown h4 ml-3" @click.prevent="getFavorites">
                    <button class="btn dropdownIcon ml-0 pl-0" id="favorDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-heart" style="color:white">
                            <span v-if="favorLength > 0">{{ favorLength  }}</span>
                        </i>
                        <span style="color: #FFFFFF;display: inline-block;">最愛的</span>
                    </button>
                <!-- 下拉頁面 -->
                <div class="dropdown-menu px-3" aria-labelledby="favorDropdown" style="min-width: 300px">
                    <h6>最愛清單</h6>
                    <table class="table table-sm table-hover">
                        <tbody>
                            <!-- <h5 class="itemTitle" v-if='cartLength === 0' colspan="3">還沒放進喜歡的商品嗎？</h5>
                            <h5 class="itemTitle" v-else>願望清單</h5> -->
                            <tr v-for="item in favorites" :key="item.id">
                                <td width="50">
                                    <i class="fas fa-cart-plus text-sbbrown" type="button" @click.stop="addtoCart(item.id, item.num)"></i>
                                </td>
                                <td class="text-sbbrown" @click="$router.push(`shopping/productdetail/${item.id}`)">{{ item.title }}</td>
                                <td width="50" class="itemDelete">
                                    <i class="fas fa-times text-sbbrown" type="button" @click.stop="removeFavorItem(item)"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr>
                        <router-link class="btn btn-sborange btn-block" to="/shopping/cartlist">
                            結帳去
                        </router-link>
                </div>
                </div>
                <!-- 購物車 -->
                <div class="dropdown h4 ml-3" @click.prevent="getCart">
                    <button class="btn dropdownIcon ml-0 pl-0" id="cartDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-shopping-cart" style="color:white" :class="{'empty': cartLength === 0}"></i>
                        <span style="color: #FFFFFF; display: inline-block;">購物車</span>
                        <span class="font-weight-bold" style="color: green" v-if="cartLength > 0">{{ cartLength }}</span>
                    </button>
                <!-- 下拉頁面 -->
                <div class="dropdown-menu px-3" aria-labelledby="cartDropdown" style="min-width: 300px">
                    <h6>已選擇商品</h6>
                    <!-- <h5 class="itemTitle" v-if='cartLength === 0'>購物車是空的唷！</h5>
                    <h5 class="itemTitle" v-else>購物車</h5> -->
                    <table class="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-sbbrown">商品名稱</th>
                                <th class="text-sbbrown">數量</th>
                                <th class="text-sbbrown text-center">金額</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr v-for="item in cart.carts" :key="item.id">
                                <td>
                                    <i class="fas fa-trash-alt text-sbbrown" type="button" data-toggle="modal" @click.stop="removeCartItem(item.id)"></i>
                                </td>
                                <td class="text-sbbrown" @click="$router.push(`shopping/productdetail/${item.id}`)">{{ item.product.title }}</td>
                                <td class="text-sbbrown text-right">{{ item.qty }}</td>
                                <td class="text-sbbrown text-right">{{ item.total | currency }}</td>
                            </tr>
                        </tbody>
                    </table>
                        <button class="btn btn-sbtan btn-block" @click="$router.push('/shopping/productlist')" v-if="!cartLength || cartLength === 0">購物去</button>
                        <button class="btn btn-sborange btn-block" @click="$router.push('/shopping/cartlist')" v-else>結帳去</button>
                </div>
                </div>
            </div>
        </div>
    </nav>
  </div>
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
        addtoCart(id , qty = 1) {  // ES6預設值qty=1
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading = true;
                const cart = {
                    product_id: id,
                    qty,
                };
            vm.$http.post(api, { data: cart }).then((response) => {
                console.log('post' ,response.data);
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
        // getCart() {
        //     const vm = this;
        //     const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`; 
        //     vm.isLoading = true;
        //     this.$http.get(url).then((response) => {
        //         // vm.products = response.data.products;  // 取得資料後，將資料存放到products
        //         // console.log(response);
        //         vm.isLoading = false;
        //     });
        // },
    },
    computed: {
        // 結帳階段避免navbar購物車被異動
        // avoidClick() {
        //     if (this.$route.path === 'shopping/checkorder' || this.$route.path === 'shopping/buyerinfo') {
        //         $('#cartDropdown').dropdown('hide');
        //         $('#favorDropdown').dropdown('hide');
        //         return true;
        //     }
        // return false;
        // },
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