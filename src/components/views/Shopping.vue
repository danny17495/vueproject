<template>
  <div>
    <Navbar/>
    <Alert></Alert>

    <main>
      <router-view></router-view>
    </main>

    




    <!-- 頁尾 -->
    <Footer></Footer>
  </div>
</template>




<script>
// 將要置入此頁面的元件import近來
import Navbar from './front/Navbar';
import Alert from '../views/admin/AlertMessage';
import Footer from './front/Footer';
export default {
  components: {
    Navbar,
    Alert,
    Footer,
  },
};
</script>