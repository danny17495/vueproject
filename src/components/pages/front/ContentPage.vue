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
            <i class="fab fa-envira"></i>
            成為寶可夢大師吧！
        </h2>
        <div class="row no-gutters justify-content-center my-4">
            <div class="col-md-10">
                <div class="row no-gutters">
                    <div class="col-lg-4 hovereffect border border-dark">
                        <div class="img-responsive rectangle-image bg-cover" data-aos="fade-down"  style="background-image: url(https://upload.cc/i1/2020/08/31/i3tEJd.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">衣服飾品</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect border border-dark">
                        <div class="img-responsive rectangle-image bg-cover" data-aos="fade-down" data-aos-delay="300" style="background-image: url(https://upload.cc/i1/2020/08/31/di3ou4.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">生活雜貨</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect border border-dark">
                        <div class="img-responsive rectangle-image bg-cover" data-aos="fade-down" data-aos-delay="600" style="background-image: url(https://upload.cc/i1/2020/08/31/vKpnw1.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">玩具模型</a>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="row no-gutters justify-content-center my-3">
            <div class="col-md-10 mb-0">
                <div class="row no-gutters">
                    <div class="col-lg-4 hovereffect border border-dark">
                        <div class="img-responsive rectangle-image bg-cover" data-aos="fade-up" data-aos-delay="900" style="background-image: url(https://upload.cc/i1/2020/08/31/5ILR9H.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">遊戲</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect border border-dark">
                        <div class="img-responsive rectangle-image bg-cover" data-aos="fade-up" data-aos-delay="1200" style="background-image: url(https://upload.cc/i1/2020/08/31/gHT9IW.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">御三家</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect border border-dark">
                        <div class="img-responsive rectangle-image bg-cover" data-aos="fade-up" data-aos-delay="1500" style="background-image: url(https://upload.cc/i1/2020/08/31/QSFENj.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">其他</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <!-- 滾動圖 -->
        <div class="parallax col"></div>
    
        <!-- 尋找我們 -->
        <section class="py-5 map col" style="position: relative;">
            <div class="container">
                <h2 class="text-sbbrown text-center mb-4 font-weight-bold">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>寶可夢商店</span>
                </h2>
                <div class="row">
                    <div class="col-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14460.047012906507!2d121.5561283697754!3d25.03367519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0xd508f7b3aa02d931!2z5Y-w5YyXMTAx6KeA5pmv5Y-w!5e0!3m2!1szh-TW!2stw!4v1598326803781!5m2!1szh-TW!2stw" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
            <div class="col-md-5 bg-cover"></div>
        </section>
    </div>
</template>

<script>
  AOS.init();
</script>  