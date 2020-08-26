<template>
    <div class="carList">
        <loading :active.sync="isLoading"></loading>
        <div class="container">
            <!-- 進度條 -->
            <div class="row text-center p-5">
                <div class="col-md-3 alert alert-success alert-rounded">
                    確認購物車　　
                    <i class="fas fa-angle-double-right"></i>
                </div>
                <div class="col-md-3 alert alert-dark alert-rounded">填寫訂單資料</div>
                <div class="col-md-3 alert alert-dark alert-rounded" role="alert">確認訂單資料</div>
                <div class="col-md-3 alert alert-dark alert-rounded">完成訂購</div>
            </div>
            <div class="row mt-4">
                <div class="col-md-8 table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr class="text-sbbrown font-weight-bold">
                                <th width="8%"></th>
                                <th class="productTh" width="18%"></th>
                                <th>商品名稱</th>
                                <th width="15%" class="text-center">數量</th>
                                <th width="15%" class="text-center">金額</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-sbbrown" v-for="item in cartData.carts" :key="item.id">
                                <td class="align-middle">
                                    <button type="button" class="btn btn-outline-sbtan border-0" @click.prevent="removeCartItem(item.id)">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                                <td class="productImg align-middle">
                                    <img :src="item.product.imageUrl" class="img-thumbnail">
                                </td>
                                <td class="align-middle" @click="$router.push(`/shopping/productdetail/${item.id}`)">{{ item.product.title }}</td>
                                <td class="align-middle text-right editColumn">{{ item.qty }}
                                </td>
                                <td class="align-middle text-right">{{ item.total | currency }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="tableTotal">
                                <td colspan="4" class="font-weight-bold text-right">小計</td>
                                <td class="h5 font-weight-bold text-right text-danger">{{ cartData.total | currency }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="col-md-4 mb-6">
                    <div class="input-group">
                        <input type="text" class="form-control " v-model="coupon_code" placeholder="請輸入優惠碼">
                        <div class="input-group-append">
                        <button type="button" class="btn btn-danger" @click="addCouponCode">確認</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between my-2 p-2">
                        <span>小計</span>
                        <span>{{ cartData.total | currency }}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-2 p-2">
                        <span>優惠折抵</span>
                        <span class="justify-content-end">- {{ cartData.total - cartData.final_total | currency }}</span>
                    </div>
                    <p style="font-size:13px; color:#EA562A">{{ couponResponse }}</p>
                    <div class="d-flex justify-content-between mb-5 p-2">
                        <span>總計</span>
                        <span>{{ cartData.final_total | currency }}</span>
                    </div>
                </div>
                
            </div>
            <div class="text-right mt-5 pb-5">
                <button type="button" class="btn btn-secondary mr-2" @click.prevent="$router.push('shopping/productlist')">繼續選購</button>
                <button type="submit" class="btn btn-danger" @click.prevent="goNextPage">下一步</button>
            </div>
        </div>

        <!-- 離開頁面Modal -->
        <div class="modal fade" id="leaveModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <p>尚未完成訂購流程，請確認是否離開此頁？</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger confirm" data-dismiss="modal">確定</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>



<script>
import $ from 'jquery';
export default {
    data() {
        return {
            cart: {}, // 購物車資料(localStorage)
            cartLength: '', // 購物車商品筆數(localStorage)
            coupon_code: '', // 優惠代碼
            // total: 0, // 總計金額
            cartData: {
                // total: 0,
                // final_total: 0,
            },
            couponResponse: '',
            isConfirm: false, // 是否已呼叫API存購物車商品
            isNext: false, // 是否為下一步
            isLoading: false,
        };
    },
    methods: {
        getCart() {  // 從localStorage取資料
            const vm = this;
            vm.isLoading = true;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.$http.get(url).then(response => {
                vm.isLoading = false;
                vm.myCarts = response.data.data;
                console.log('getCart',response.data.data);
            });
        },
        removeCartItem(id) {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            vm.$http.delete(url).then(() => {
                // console.log('removeCartItem',response.data);
                vm.getCart();
                vm.$bus.$emit("updateBag");
                
            });
        },
        // 商品數量變更做判斷
        changeQty(product, num) {
            const qty = parseInt((product.qty + num), 10);
            this.changeNumber(product);
            console.log('數量', qty);
        },
    
        // 數量欄位變動時判斷
        changeNumber(product, qty) {
            const vm = this;
            let productIndex = -1;
            if (vm.cart.length > 0) {
                vm.cart.forEach((item, index) => {
                    if (item.id === product.id) {
                        productIndex = index;
                    }
                });
            }
            if (qty >= 10) {
                vm.cart[productIndex].qty = 10;
            } else if (qty <= 1) {
                vm.cart[productIndex].qty = 1;
            } else {
                vm.cart[productIndex].qty = product.qty;
            }
            // 計算金額
            const total = parseInt((vm.cart[productIndex].price * vm.cart[productIndex].qty), 10);
            vm.cart[productIndex].total = total;
            // 更新
            // localStorage.setItem('cart', JSON.stringify(vm.cart));
            // vm.$bus.$emit('cart:get');
            vm.getCart();
        },
        // 取得確認購物資料(從API取資料)
        getCartData() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.$http.get(url).then((response) => {
                // console.log('getCartData' , response.data);
                vm.isLoading = false;
                vm.cartData = response.data.data;
            });
        },
        // 套用優惠券
        addCouponCode() {
            const vm = this;
            let code = {
                code: vm.coupon_code,
            };
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            vm.$http.post(url, { data: code }).then(response => {
                if (response.data.success) {
                    vm.couponResponse = response.data.message;
                    vm.getCartData();   // 試改 vm.getCartData();
                } else {
                    vm.couponResponse = response.data.message;
                }
            });
        },
        // 下一步
        goNextPage() {
            this.isNext = true;
            this.$router.push('/shopping/OrderPayment');
        },
    },
    created() {
        const vm = this;
        vm.getCart();
        vm.getCartData();
        // vm.confirmCart();
        // vm.cancelCart();
        vm.$bus.$on('checkCart:get', () => vm.getCart());
    },
    beforeRouteLeave(to, from, next) {
        const vm = this;
        if (vm.isNext) {
            next();
        } else {
            $('#leaveModal').modal('show');
            $('.confirm').on('click', () => {
                vm.removeCartItem();
                next();
            });
            $('.cancel').on('click', () => {
                next(false);
            });
        }
    },
}
</script>