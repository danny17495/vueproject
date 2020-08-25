<template>
<div>
    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- Alert -->
    <Alert></Alert>
    <!-- Carousel -->
    <Carousel></Carousel>
    <main>
        <ContentPage></ContentPage>
    </main>
    <!-- subscription -->
    <Subscription></Subscription>
    <!-- footer -->
    <Footer></Footer>
</div>
</template>

<script>
//將要置入的元件import 
import Navbar from './front/Navbar';
import Alert from '../views/admin/AlertMessage';
import Carousel from './front/Carousel';
import ContentPage from '@/components/pages/front/ContentPage';
import Subscription from '@/components/pages/front/Subscription';
import Footer from './front/Footer';




export default {
    components: {
        Navbar,
        Alert,
        Carousel,
        ContentPage,
        Subscription,
        Footer,
    },
};
</script>