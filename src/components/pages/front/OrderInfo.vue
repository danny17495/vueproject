<template>
    <div class="orderInfo">
        <loading :active.sync="isLoading"></loading>
        <div class="container">
            <!-- 進度條 -->
            <div class="row text-center p-5">
                <div class="col-md-3 alert alert-success alert-rounded">
                    <i class="fas fa-check-circle"></i>
                    確認購物車　　
                    <i class="fas fa-angle-double-right"></i>
                </div>
                <div class="col-md-3 alert alert-success alert-rounded">
                    <i class="fas fa-check-circle"></i>
                    填寫訂單資料　　
                    <i class="fas fa-angle-double-right"></i>
                </div>
                <div class="col-md-3 alert alert-success alert-rounded" v-if="!order.is_paid">
                    確認訂單資料　　
                    <i class="fas fa-angle-double-right"></i>
                </div>
                <div class="col-md-3 alert alert-success alert-rounded" v-else>
                    <i class="fas fa-check-circle"></i>
                    確認訂單資料　　
                    <i class="fas fa-angle-double-right"></i>
                </div>
                <div class="col-md-3 alert alert-dark alert-rounded" v-if="!order.is_paid">
                    完成訂購
                </div>
                <div class="col-md-3 alert alert-success alert-rounded" v-else>
                    <i class="fas fa-check-circle"></i>
                    完成訂購
                </div>
            </div>

        <div class="container px-5">
            <div class="orderinfo row justify-content-center mt-4">
                <h3 class="text-sbbrown font-weight-bold">訂單資訊</h3>
                <table class="table mt-3 p-5">
                    <thead>
                        <tr>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th>價格</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in order.products" :key="item.id">
                            <td>{{ item.product.title }}</td>
                            <td>{{ item.qty }}</td>
                            <td>　{{ item.final_total | currency }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="text-right font-weight-bold h5" colspan="2">總計</td>
                            <td class="text-danger font-weight-bold h5" colspan="3">{{ order.total | currency }}</td>
                        </tr>
                    </tfoot>                    
                </table>
            </div>
            <div class="userinfo row justify-content-center mt-4">
                <h3 class="text-sbbrown font-weight-bold">收件者資訊</h3>
                <table class="table mt-3 p-5">
                    <tbody>
                        <tr>
                            <td class="title">訂購日期</td>
                            <td>{{ order.create_at | date }}</td>
                        </tr>
                        <tr>
                            <td class="title">姓名</td>
                            <td>{{ order.user.name }}</td>
                        </tr>
                        <tr>
                            <td class="title">電話</td>
                            <td>{{ order.user.tel }}</td>
                        </tr>
                        <tr>
                            <td class="title">Email</td>
                            <td>{{ order.user.email }}</td>
                        </tr>
                        <tr>
                            <td class="title">地址</td>
                            <td>{{ order.user.address }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr v-if="order.user.payment === 'CVS'">
                            <td class="title">超商付款代碼</td>
                            <td>CLOY011109251982</td>
                        </tr>
                        <tr v-if="order.user.payment === 'ATM'">
                            <td class="title">ATM轉帳帳號</td>
                            <td>中國信託(822)250510091408011404</td>
                        </tr>
                        <tr>
                            <td class="title">付款狀態</td>
                            <td class="text-danger font-weight-bold" v-if="!order.is_paid">尚未付款</td>
                            <td class="text-info" v-else>完成付款</td>
                        </tr>
                    </tfoot>
                </table>
                
                
            </div>
            <div class="text-right py-5">
                <button type="button" class="btn btn-danger" v-if="!order.is_paid" @click.prevent="payOrder">確認送出</button>
                <!-- <button type="button" class="btn btn-secondary cancel" v-else @click.prevent="$router.push('/shopping/productlist')">回到商店</button> -->
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
            orderId: '',  // 訂單編號
            order: {  // 訂單內容
                user: {},
            },
            isLoading: false, // loading 圖示顯示狀態
        }
    },
    methods: {
        // 取得訂單資料
        getOrder() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
            vm.$http.get(url).then((response) => {
                if (!response.data.success) {
                    vm.$bus.$emit('message:push', response.data.message, 'danger');
                    vm.$router.push('/productlist');
                } else {
                    vm.order = response.data.order;
                }
            });
        },
        // 確認付款
        payOrder() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
            vm.isLoading = true;
            vm.$http.post(url).then((response) => {
                vm.isLoading = false;
                if (response.data.success) {
                    vm.getOrder();
                    // 重新整理 Navbar 購物車
                    vm.$bus.$emit('cart:get');
                    // $('#completeModal').modal('show');
                } else {
                    vm.$bus.$emit('message:push', response.data.message, 'danger');
                }
            });
        },
    },
    created() {
        // 接訂單編號參數
        this.orderId = this.$route.params.order_id;
        this.getOrder();
    },
}
</script>