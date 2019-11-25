<template>
  <v-container class="fill-height text-center justify-center">
    <div align-center>
      <v-row :key="index" v-for="( orderItem , index) in orderItems">
        <BeerCard :beer="orderItem.beer"></BeerCard>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import BeerCard from "./beer/BeerCard";
const axios = require("axios");
export default {
  components: {
    BeerCard
  },
  name: "CartPage",
    data() {
      return {
        orderItem: {},
        orderItems: []
    };
  },
methods: {
  fetchData() {
    axios.get("http://localhost:8081/api/user/order").then(response => {
    this.orderItems = response.data;
   });
  }
},
  created() {
    this.fetchData();
    }
};

</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
