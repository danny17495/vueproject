<template>
    <div>
        <!-- 最新消息 -->
        <section class="py-4 news">
            <div class="container">
                <div class="col-md-6 my-4">
                    <img class="maintext" src="" alt="">
                    <img class="maintextMobile" src="" alt="">
                </div>
            </div>
        </section>
        

    <!-- 圖片介紹區 -->
    <section class="menu" >
        <h2 class="text-sbbrown font-weight-bold text-center py-2 mb-0">
        <i class="fas fa-search"></i>
            找尋自己的香味
        </h2>
        <div class="row no-gutters justify-content-center my-3">
            <div class="col-md-10">
                <div class="row no-gutters">
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/08/24/N3wvBI.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">森林清香</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/08/24/s9WSF8.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">清淡芬芳</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/08/24/lfRgFJ.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">激情迷香</a>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="row no-gutters justify-content-center my-3">
            <div class="col-md-10 mb-0">
                <div class="row no-gutters">
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/03/24/wz0Jge.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">海洋迷香</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/08/24/FWBlRf.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">成熟男香</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/08/24/1EFlvm.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">其他香水</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <!-- 滾動圖 -->
        <div class="parallax col"></div>
    
        <!-- 尋找我們 -->
        <section class="py-5 menu" style="position: relative;">
            <div class="container">
                <h2 class="text-sbbrown text-center mb-4 font-weight-bold">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>讀味去</span>
                </h2>
                <div class="row">
                    <div class="col-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.798764638595!2d120.6380078674417!3d24.143704275757543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dc721c23df9%3A0x7d7f32079c4fee44!2z5Y2X5bGv5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1585492557383!5m2!1szh-TW!2stw" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
            <div class="col-md-5 bg-cover"></div>
        </section>
    </div>
</template>