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
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdownIcon">
            <router-link class="btn navBtn" to="/shopping/productlist">
              <i class="fas fa-store"></i>
              <span>寶可夢商店</span>
            </router-link>
          </li>
          <!-- 我的最愛 -->
          <li class="nav-item dropdown">
            <button class="btn dropdownIcon ml-0 pl-0" id="favorDropdown" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <i class="fas fa-heart">
                <span v-if="favorLength > 0">{{ favorLength  }}</span>
              </i>
              <span>我的最愛</span>
            </button>
            <!-- 下拉頁面 -->
            <div class="dropdown-menu" aria-labelledby="favorDropdown" style="min-width: 300px">
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
              <router-link class="btn btn-danger btn-block" to="/shopping/cartlist">
                結帳去
              </router-link>
            </div>
          </li>
          <!-- 購物車 -->
          <li class="nav-item dropdown">
            <button class="btn dropdownIcon ml-0 pl-0" id="cartDropdown" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false" @click.prevent="getCart">
              <i class="fas fa-shopping-cart" :class="{'empty': cartLength === 0}">
                <span v-if="cartLength > 0">{{ cartLength }}</span>
              </i>
              <span>購物車</span>
            </button>
            <!-- 下拉頁面 -->
            <div class="dropdown-menu" aria-labelledby="cartDropdown" style="min-width: 300px">
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
          </li>
        </ul>
        <div class="dropdown h4 ml-3">
          <router-link class="btn btn-block span-white navBtn" to="/login">
            <i class="fas fa-cog"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>