<template>
<div>
  <Carousel :autoplay="true" :perPage="1" :loop="true" :autoplayTimeout="3000" :paginationActiveColor="'#CEA84E'">
    <Slide>
      <img src="https://upload.cc/i1/2020/08/25/ye9lo1.jpg" class="w-100" alt="...">
    </Slide>
    <Slide>
      <img src="https://upload.cc/i1/2020/08/25/rViX7S.jpg" class="w-100"  alt="...">
    </Slide>
    <Slide>
      <img src="https://upload.cc/i1/2020/08/25/7nzMfA.jpg" class="w-100" alt="...">
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
