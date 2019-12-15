<template>
  <v-container>
    <v-row
      :key="index"
      v-for="(order, index) in orders"
      justify="center"
      class="mb-4"
    >
      <OrderCard :order="order"></OrderCard>
    </v-row>
  </v-container>
</template>

<script>
import OrderCard from "./OrderCard";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderViewAdmin",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchAllOrders"])
  },
  computed: {
    ...mapGetters(["orders"])
  },
  created() {
    this.fetchAllOrders();
  },
  components: {
    OrderCard
  }
};
</script>
