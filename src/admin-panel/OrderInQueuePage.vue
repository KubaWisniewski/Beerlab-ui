<template>
  <v-container>
    <v-row
      :key="index"
      v-for="(order, index) in currentOrders"
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
  name: "OrderInQueue",
  components: {
    OrderCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentOrders"])
  },
  methods: {
    ...mapActions(["fetchCurrentOrders"])
  },
  created() {
    this.fetchCurrentOrders();
  }
};
</script>
