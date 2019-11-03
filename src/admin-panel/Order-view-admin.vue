<template>
  <v-container>
    <v-row :key="index" v-for="(order, index) in orders">
      <OrderCard :order="order"></OrderCard>
    </v-row>
  </v-container>
</template>

<script>
const axios = require("axios");
import OrderCard from "./OrderCard";
export default {
  name: "OrderViewAdmin",
  components: {
    OrderCard
  },
  data() {
    return {
      order: {},
      orders: []
    };
  },
  methods: {
    fetchOrders() {
      axios.get("http://localhost:8081/api/order").then(response => {
        this.orders = response.data;
      });
    }
  },
  created() {
    this.$root.$on("changedStatus", () => {
      this.fetchOrders();
    });
    this.interval = setInterval(() => this.fetchOrders(), 5000);
  }
};
</script>

<style>
</style>