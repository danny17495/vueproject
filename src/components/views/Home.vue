<template>
<div>
    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- Carousel -->
    <Carousel></Carousel>
</div>
</template>

<script>
//將要置入的元件import 
import Navbar from './front/Navbar';
import Carousel from './Carousel';


export default {
    components: {
        Navbar,
        Carousel,
    },
};
</script>