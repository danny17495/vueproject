  
<template>
    <div class="orderPayment">
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
                    填寫訂單資料　　
                    <i class="fas fa-angle-double-right"></i>
                </div>
                <div class="col-md-3 alert alert-dark alert-rounded" role="alert">確認訂單資料</div>
                <div class="col-md-3 alert alert-dark alert-rounded">完成訂購</div>
            </div>

            <div class="row justify-content-center mt-4 pb-5">
                <div class="col-md-10">
                    <form class="border border-sbtan rounded py-4 px-5" @submit.prevent="creatrOrder">  <!-- 清除預設submit行為 -->
                        <div class="h4">訂單詳細資料</div>
                        <div class="form-group">
                            <ValidationProvider name="姓名" rules="required" v-slot="{ failed, errors }">
                                <label for="name">收件者姓名</label>
                                <input type="text" class="form-control" name="name" id="username" v-model="form.user.name" placeholder="請輸入姓名"
                                :class="{ 'is-invalid': failed }">
                                <span class="text-danger">{{ errors[0] }}</span>  <!-- 當欄位被觸發過時，若無填寫資料就會變成false -->
                            </ValidationProvider>
                        </div>

                        <div class="form-row">
                            <div class="col-md-6">
                                <ValidationProvider name="聯絡電話" rules="required" v-slot="{ failed, errors }">
                                <label for="tel">聯絡電話</label>
                                <input type="tel" class="form-control" name="tel" id="usertel" v-model="form.user.tel" placeholder="請輸入電話"
                                :class="{ 'is-invalid': failed }">
                                <span class="text-danger">{{ errors[0] }}</span>  <!-- 當欄位被觸發過時，若無填寫資料就會變成false -->
                                </ValidationProvider>
                            </div>
                            <div class="col-md-6">
                                <ValidationProvider name="付款方式" rules="required" >
                                <label for="payment">付款方式</label>
                                <select name="payment" id="payment" class="form-control" v-model="form.user.payment">
                                    <option value="selected">請選擇付款方式</option>
                                    <option value="COD">貨到付款</option>
                                    <option value="CVS">超商付款</option>
                                    <option value="ATM">ATM轉帳</option>
                                </select>
                                <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                            
                        <div class="form-group">
                            <ValidationProvider name="收件地址" rules="required" v-slot="{ failed, errors }">
                            <label for="useraddress">收件地址</label>
                            <div class="form-group mt-3">
                                <input type="address" class="form-control" name="address" id="useraddress" v-model="form.user.address" placeholder="請輸入地址"
                                :class="{ 'is-invalid': failed }">
                                <span class="text-danger">{{ errors[0] }}</span>  <!-- 當欄位被觸發過時，若無填寫資料就會變成false -->
                            </div>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <ValidationProvider name="E-mail" rules="required|email" >
                            <label for="userEmail">E-mail</label>
                            <input type="email" class="form-control" name="email" id="useremail" v-model="form.user.email" placeholder="請輸入電子信箱">
                            <span class="text-danger">{{ errors[0] }}</span>  <!-- 當欄位被觸發過時，若無填寫資料就會變成false -->
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label for="message">訂單備註</label>
                            <textarea class="form-control" name="email" id="message" rows="3"></textarea>
                        </div>
                        
                        <!-- 付款方式說明 -->
                        <div class="form-group notice" v-if="form.user.payment === 'COD'">
                            <h5 class="text-sborange">PAYMENT
                                <i class="fas fa-truck"></i> | 貨到付款
                            </h5>
                            <ul class="text-sbbrown">
                                <li>商品皆使用「冷凍宅配」以維持食物的新鮮與完整</li>
                                <li>商品配送及貨到付款，皆統一委由番茄宅急便處理(配送地點限台灣本島)</li>
                            </ul>
                        </div>
                        <div class="form-group notice" v-if="form.user.payment === 'CVS'">
                            <h5 class="text-sborange">PAYMENT
                                <i class="fas fa-store-alt"></i> | 超商付款
                            </h5>
                            <ul class="text-sbbrown">
                                <li>可至7-11、全家、萊爾富、OK便利商店進行列印單據並且繳款</li>
                                <li>在完成訂單的頁面，會顯示您此筆交易專屬的超商代碼，請記下這組代碼至鄰近的超商利用服務機器列印帳單進行繳費</li>
                                <li>繳費期限為訂單成立時間起24小時內須完成交易，若逾期超商代碼將失效，並自動取消訂單</li>
                            </ul>
                        </div>
                        <div class="form-group notice" v-if="form.user.payment === 'ATM'">
                            <h5 class="text-sborange">PAYMENT
                                <i class="fas fa-cash-register"></i> | ATM轉帳
                            </h5>
                            <ul class="text-sbbrown">
                                <li>在完成訂單的頁面，會顯示您此筆交易專屬的付款帳號，請記下這組代碼進行繳費</li>
                                <li>繳費期限為訂單成立時間起24小時內須完成交易，若逾期超商代碼將失效，並自動取消訂單</li>
                            </ul>
                        </div>
                        <div class="text-right mt-5">
                            <button type="submit" class="btn btn-secondary" @click.prevent="goBack">上一步</button>
                            <button type="submit" class="btn btn-danger ml-2">下一步</button>
                        </div>


                    </form>

                    
                </div>
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
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                    payment: 'selected',
                },
                message: '',
            },
            isLoading: false, // loading 圖示顯示狀態
            isNext: false, // 是否為下一步
            cartData: {}, // 取得購物資料
            isConfirm: false, // 是否已呼叫API存購物車商品
        }
    },
    methods: {
        creatrOrder() {
            // 送出訂單
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
            const order = vm.form;
            vm.isLoading = true;
            vm.isNext = true;
            vm.$http.post(url, { data: order }).then((response) => {
                // console.log('creatrOrder' , response.data);
                if (response.data.success) {
                    // 清除localStorage cart資料
                    localStorage.removeItem('cart');
                    vm.$bus.$emit('cart:get');
                    let orderId = response.data.orderId;
                    vm.$router.push(`/shopping/OrderInfo/${orderId}`);
                } else {
                    vm.$bus.$emit('message:push', response.data.message, 'danger');
                    vm.$router.push('/shopping/productlist');
                }
            });
            // vm.$validator.validate().then((valid) => {
            //     if (valid) {
            //     } else {
            //         vm.$bus.$emit('message:push', '請確認資料是否填寫完整', 'danger');
            //     }
            //     vm.isLoading = false;
            // });
        },
        goBack() {
            this.isNext = true;
            this.$router.go(-1);
        },
        // 刪除確認購買商品
        cancelCart() {
            const vm = this;
            const getUrl = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.$http.get(getUrl).then((response) => {
                if (!response.data.success) {
                    vm.$bus.$emit('message:push', response.data.message, 'danger');
                } else {
                    vm.cartData = response.data.data;
                    if (vm.cartData.carts.length > 0) {
                        vm.isConfirm = true;
                    } else {
                        vm.isConfirm = false;
                    }
                if (vm.isConfirm) {
                    vm.cartData.carts.forEach((item) => {
                        const delUurl = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${item.id}`;
                        vm.$http.delete(delUurl).then((res) => {
                            if (!res.data.success) {
                                vm.$bus.$emit('message:push', res.data.message, 'danger');
                            }
                        });
                    });
                }
                }
            });
        },
    },
    beforeRouteLeave(to, from, next) {
        const vm = this;
        if (vm.isNext) {
            next();
        } else {
            $('#leaveModal').modal('show');
            $('.confirm').on('click', () => {
                vm.cancelCart();
                next();
            });
            $('.cancel').on('click', () => {
                next(false);
            });
        }
    },
}
</script>