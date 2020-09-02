<template>
  <div class="productdetail pb-5 pt-4">
    <div class="detailbg">
      <div class="container">
        <!-- 麵包屑 -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent px-0 mb-3">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-sborange">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <a class="text-sborange"
                @click.prevent="$router.push({ name: 'ProductList', params: { category: product.category }})">{{ product.category }}</a>
            </li>
            <li class="breadcrumb-item active text-sbtan" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
      </div>

      <div class="container main">
        <div class="row">
          <div class="col-6 col-md-6">
            <div class="productImage">
              <img :src="product.imageUrl" alt="">
            </div>
          </div>
          <div class="col-6 col-md-6">
            <div class="productTitle text-sbbrown font-weight-bold">{{product.title}}</div>
            <div class="d-flex justify-content-end align-items-end mt-3">
              <div class="h6 mr-auto mb-0">
                <span class="text-muted">建議售價 </span>
                <span class="text-muted"> <s>{{product.origin_price | currency}}</s></span>
              </div>
              <div>
                <div class="onlinePrice ml-auto mb-0">
                  <small>網路價</small>
                  <strong class="text-danger font-weight-bold">{{product.price | currency}}</strong>
                </div>
              </div>
            </div>
            <hr>
            <div class="productInfo mt-4">
              <p class="text-justify text-sbbrown">{{product.description}}</p>
            </div>
            <hr>
            <div class="row mt-4 align-items-end">
              <div class="col-sm-3 col-md-3">數量</div>
              <div class="col-sm-9 col-md-8">
                <div class="btn-group border">
                  <button type="button" class="btn btn-outline-sbtan" @click="changeQty(-1)">
                    <i class="fas fa-minus"></i>
                  </button>
                  <input type="number" class="input-qty btn btn-outline-sbtan" readonly v-model="productNum"
                    @change="changeNumber(productNum, product.num)">
                  <button type="button" class="btn btn-outline-sbtan" @click="changeQty(1)">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="row mt-4 buyButton">
              <div class="col-md-6 mt-3">
                <button type="button" class="btn btn-danger btn-block"
                  @click.prevent="addtoCart(product.id, product.num),$router.push('/shopping/cartlist')">立即購買</button>
              </div>
              <div class="col-md-6 mt-3">
                <button type="button" class="btn btn-dark btn-block text-white "
                  @click.prevent="addtoCart(product.id, product.num , productNum)">加入購物車</button>
              </div>
            </div>
          </div>
        </div>

        <!-- RWD開 -->
        <div class="row buyButton2 mt-4">
          <div class="col-sm-6 col-md-6">
            <button type="button" class="btn btn-danger btn-block"
              @click.prevent="addtoCart(product.id, product.num),$router.push('/shopping/cartlist')">立即購買</button>
          </div>
          <div class="col-sm-6 col-md-6">
            <button type="button" class="btn btn-dark btn-block text-white"
              @click.prevent="addtoCart(product.id, product.num , productNum)">加入購物車</button>
          </div>
        </div>

        <div class="product_description">
          <!-- 商品介紹 -->
          <section class="mt-5">
            <div class="productItd">
              <h5 class="font-weight-bold text-sbbrown"><i class="fas fa-leaf"></i> 商品特色</h5>
              <div class="productContent p-3 my-4">
                <div class="row text-center mb-5">
                  <div class="col-sm-6 col-md-3">
                    <p class="productText align-items-start">送禮自用皆宜</p>
                    <img class="align-items-center img-thumbnail imgHeight" src="https://upload.cc/i1/2020/08/31/Y3KTBt.jpg" alt="">
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <p class="productText align-items-start">獨一無二</p>
                    <img class="align-items-center img-thumbnail" src="https://upload.cc/i1/2020/08/31/er0zl6.jpg" alt="">
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <p class="productText align-items-start">優良品牌</p>
                    <img class="align-items-center img-thumbnail" src="https://upload.cc/i1/2020/08/31/9Sivz4.jpg" alt="">
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <p class="productText align-items-start">自由搭配</p>
                    <img class="align-items-center img-thumbnail" src="https://upload.cc/i1/2020/08/31/XSal3H.jpg" alt="">
                  </div>
                </div>
                <div class="row mt-4 p-3">
                  <div class="col-md-3">
                    <div class="h4 text-danger text-center font-weight-bold">尋找自己的御三家</div>
                    <ul class="list-unstyled text-sbbrown py-3">
                      <li><i class="far fa-smile-beam"></i> 寶可夢迷不可錯過的經典</li>
                      <hr>
                      <li><i class="far fa-smile-beam"></i> 獨特仿真設計</li>
                      <hr>
                      <li><i class="far fa-smile-beam"></i> 立即下訂免運費</li>
                    </ul>
                  </div>
                  <div class="col-md-9">
                    <img class="img-fluid" src="https://upload.cc/i1/2020/08/31/5LNsRE.jpg" alt="Responsive image">
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- 購買須知 -->
          <section class="mt-5">
            <div class="buyNeed mt-5">
              <h5 class="font-weight-bold text-sbbrown">
                <i class="fas fa-exclamation-circle"></i> 購買須知
              </h5>
              <ul class="text-sbtan">
                <li>24H直達配送</li>
                <li>12歲以下小朋友請由家長陪同使用</li>
                <li>製造日期：請見包裝標示(西元 /年/月/日)</li>
                <li>本商城販售之商品拆封後無7天鑑賞期服務</li>
              </ul>
            </div>
          </section>

          <!-- 相似商品 -->
          <div class="similarContent mt-5">
            <div class="h5 text-sbbrown font-weight-bold">相似商品</div>
            <div class="row similar">
              <div class="col-md-3 col-sm-6 col-12" v-for="item in filterSimilarProducts" :key="item.id">
                <div class="productCard" @click.prevent="$router.push(`/shopping/productdetail/${item.id}`)">
                  <div class="imgwarp">
                    <img :src="item.imageUrl" alt="">
                    <div class="cardtext">{{ item.title }}</div>
                    <div class="cardtext">{{ item.price | currency }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- 網頁置頂箭頭 -->
      <button class="gotop-btn" id="gotopBtn" @click="gotop">
        <i class="fas fa-arrow-up gotop-arrow"></i>
      </button>
    </div>
  </div>
</template>


<script>
  import $ from 'jquery';
  export default {
    name: 'ProductDetail',
    data() {
      return {
        productId: '', // 儲存 router 傳遞的 id 參數
        product: [], // 單件商品資料
        productNum: 1, // 數量
        isLoading: false, // loading 圖示顯示狀態
        status: {
          loadingItem: '', // 當筆點選商品 id
        },
        products: [], // 所有商品資料(類似商品使用)
        cart: {}, // 存 localstorage-購物車資料
      };
    },
    methods: {
      getProduct() { // 取得單一商品列表
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.productId}`;
        vm.isLoading = true;
        vm.$http.get(url).then((response) => {
          vm.isLoading = false;
          if (!response.data.success) {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
            vm.$router.push('/shopping/productlist');
          } else {
            vm.product = response.data.product;
          }
        });
      },
      // 取得所有商品資料
      getProducts() {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;

        vm.isLoading = true;
        vm.$http.get(api).then((response) => {
          vm.isLoading = false;
          if (!response.data.success) {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
          } else {
            // 儲存所有商品資料
            vm.products = response.data.products;
          }
        });
      },
      addtoCart(id, productNum, qty = 1) { // ES6預設值qty=1
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        const cart = {
          product_id: id,
          qty,
          productNum,
        };
        vm.isLoading = true;
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
      getCart() { // 從localStorage取資料
        const vm = this;
        vm.isLoading = true;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.$http.get(url).then(response => {
          vm.isLoading = false;
          vm.myCarts = response.data.data;
          console.log('getCart', response.data.data);
        });
      },
      // 商品數量變更做判斷
      changeQty(num) {
        const qty = this.productNum + num;
        this.changeNumber(qty);
        console.log('數量', this.changeNumber(qty));
      },
      // 商品數量欄位變動時判斷
      changeNumber(num) {
        const qty = num;
        if (qty >= 10) {
          this.productNum = 10;
        } else if (qty <= 1) {
          this.productNum = 1;
        } else {
          this.productNum = qty;
        }
      },
      // 捲動視窗
      gotop() {
        $('html, body').animate({
          scrollTop: 0
        }, 1500);
      },
    },
    computed: {
      filterSimilarProducts() {
        const vm = this;
        return vm.products.filter(item => (item.id !== this.productId) && (item.category === vm.product.category) && (
          item.is_enabled));
        console.log('see', vm.products.filter);
      },
    },
    watch: {
      $route(to, from) {
          this.productId = this.$route.params.product_id; // 存商品 id
          this.getProduct();
      }
    },
    created() {
      this.productId = this.$route.params.product_id; // 存商品 id
      this.getProduct();
      this.getProducts();
      this.getCart();
      // 偵測頁面往下滑超過 400px 就讓 Gotop 按鈕出現
      function showBtnCondition() {
        if ($(this).scrollTop() > 400) {
          $('#gotopBtn').fadeIn();
        } else {
          $('#gotopBtn').fadeOut();
        }
      }
      $(window).scroll(showBtnCondition);
    },


  };

</script>
