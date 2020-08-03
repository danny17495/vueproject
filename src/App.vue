<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    //'https://vue-course-api.hexschool.io/api/danny17495/products';
    // api 伺服器路徑
    // 申請的API PATH
    console.log(process.env.APIPATH, process.env.CUSTOMPATH)
    this.$http.get(api).then((response) => {
      console.log(response.data);
    });
  },
}
</script>

<style lang="scss">
@import "./assets/all.scss";
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
