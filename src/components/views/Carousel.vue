<template>
<div>
  <Carousel :autoplay="true" :perPage="1" :loop="true" :autoplayTimeout="3000">
    <Slide>
      <img src="https://upload.cc/i1/2020/08/21/ClhqUT.jpg" class="w-100" alt="...">
    </Slide>
    <Slide>
      <img src="https://upload.cc/i1/2020/08/21/oqiPlv.jpg" class="w-100"  alt="...">
    </Slide>
    <Slide>
      <img src="https://upload.cc/i1/2020/08/21/CGXWVy.jpg" class="w-100" alt="...">
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
