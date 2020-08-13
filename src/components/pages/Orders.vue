<template>
  <div>
    <table class="table mt-4">
      <thead></thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orders: [],
      };
    },
    methods: {
      getOrders(page = 1) {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders?page=${page}`;
        const vm = this;
        this.$http.get(api).then((response) => {
          console.log(response.data);
        });
      },
    },
    created(){
        this.getOrders();
    }
  }

</script>
