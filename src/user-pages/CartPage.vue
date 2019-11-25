<template>
  <v-container class="fill-height text-center justify-center">
    <div align-center>
      <v-row :key="index" v-for="( orderItem , index) in order.orderItemsDto">
        <BeerCard :beer="orderItem.beerDto"></BeerCard>
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
         order: {},
         beer: {},
         orderItemsDto: []
    };
  },
methods: {

  fetchData() {
    axios.get("http://localhost:8081/api/user/order", {
      headers: {
        "X-Auth-Token": localStorage.getItem("token").replace(/"/g, "")
      }
    }).then(response => {
      this.order = response.data;
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
