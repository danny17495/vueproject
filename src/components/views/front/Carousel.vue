<template>
<div>
  <Carousel :autoplay="true" :perPage="1" :loop="true" :autoplayTimeout="3000" :paginationColor="'#C2C2C2'" :paginationActiveColor="'#484848'">
    <Slide>
      <img src="https://upload.cc/i1/2020/08/31/lmOYkB.jpg" class="w-100"  alt="...">
    </Slide>    
    <Slide>
      <img src="https://upload.cc/i1/2020/08/31/jtwkxy.jpg" class="w-100"  alt="...">
    </Slide>
    <Slide>
      <img src="https://upload.cc/i1/2020/08/31/fFkh0n.jpg" class="w-100" alt="...">
    </Slide>
    <Slide>
      <img src="https://upload.cc/i1/2020/08/31/4vgjEA.jpg" class="w-100" alt="...">
    </Slide>
  </Carousel>
</div>
</template>




<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    data() {
        return {
        }
    },
    components: {
        Carousel,
        Slide
  },
}
</script>    
