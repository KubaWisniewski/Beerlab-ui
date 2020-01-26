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
import OrderCard from "../views/components/OrderCard";
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
    ...mapActions(["fetchCurrentOrders"]),
    pollData() {
      this.polling = setInterval(() => this.fetchCurrentOrders(), 3000);
    }
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  created() {
    this.fetchCurrentOrders();
    this.pollData();
  }
};
</script>
