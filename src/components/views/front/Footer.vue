<template>
  <div>
    <footer class="footer bg-sbbrown py-4">
    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-md-3">
                <img class="img-fluid gplogo" src="../../../assets/images/logo.png">
            </div>
            <div class="col-sm-4 pl-sm-0 col-md-4 pl-md-5">
                <ul class="list-unstyled text-white">
                    <li class="font-weight-bold pb-2">關於我們</li>
                    <li class="pb-1"><a href="#" class="text-white">產品目錄</a></li>
                    <li class="pb-1"><a href="#" class="text-white">線上諮詢</a></li>
                    <li class="pb-1"><router-link class="text-white" to="/shopping/productlist">讀味去</router-link></li>
                </ul>
            </div>
            <div class="col-sm-4 col-md-4">
                <ul class="list-unstyled text-white">
                    <li class="font-weight-bold pb-2">聯絡我們</li>
                    <li class="pb-2"><i class="fas fa-phone text-white"></i> 0800-000-123</li>
                    <li class="pb-2"><i class="far fa-clock text-white"></i> 24小時全年無休</li>
                    <li><i class="fas fa-envelope"></i><a href="mailto:service@yahoo.com.tw" class="text-white"> service@yahoo.com.tw</a></li>
                    
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <ul class="list-inline">
                    <li class="list-inline-item text-white"><i class="fab fa-facebook-square fa-2x"></i></li>
                    <li class="list-inline-item text-white"><i class="fab fa-instagram fa-2x"></i></li>
                    <li class="list-inline-item text-white"><i class="fab fa-line fa-2x"></i></li>
                    <li class="list-inline-item text-white"><i class="fab fa-twitter-square fa-2x"></i></li>
                </ul>
            </div>
            <div class="col-md-7 align-self-center">
                <div class="text-white" style="font-size: 14px;">CopyRight © 2020 古龍水股份有限公司 All Rights Reserved.</div>
                <div class="text-white" style="font-size: 10px;">本網站僅供個人學習交流使用，並無任何商業用途</div>
            </div>
            <div class="col-md-1">
                <router-link class="text-white" to="/login"><i class="fas fa-user"></i></router-link>
            </div>
        </div>
    </div>
</footer>
  </div>
</template>