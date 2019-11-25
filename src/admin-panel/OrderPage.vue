<template>
  <v-container>
    <v-row :key="index" v-for="(order, index) in orders">
      <OrderCard :order="order"></OrderCard>
    </v-row>
  </v-container>
</template>

<script>
import OrderCard from "./OrderCard";
import { mapActions } from "vuex";
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
    ...mapActions(["fetchOrders"])
  },
  created() {
    this.$root.$on("changedStatus", () => {
      this.orders = this.fetchOrders();
    });
    this.orders = this.fetchOrders();
    this.interval = setInterval(() => (this.orders = this.fetchOrders()), 5000);
  }
};
</script>
