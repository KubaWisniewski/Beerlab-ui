<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/koszyk.jpeg"></v-img>
    </v-row>
    <v-row class="text-center justify-center">
      <div align-center>
        <div v-if="order.orderItemsDto.length == 0">Twój koszyk jest pusty.</div>
        <div v-else>
          <v-row :key="index" v-for="(orderItem, index) in order.orderItemsDto">
            <v-card>
              <v-card-title>{{ orderItem.beerDto.brand }}</v-card-title>
              <v-card-text>
                Opis: {{ orderItem.beerDto.description }}
                <v-img height="200px" width="600" :src="orderItem.beerDto.imgUrl" />
              </v-card-text>
              <v-card-text
                class="headline text-left text-left font-weight-bold large"
              >Sztuk: {{ orderItem.quantity }}</v-card-text>
              <v-card-text class="headline text-right font-weight-bold large">
                Cena: {{ orderItem.beerDto.price }}
                <v-icon large>mdi-beer</v-icon>
              </v-card-text>
            </v-card>
          </v-row>
          <v-card>
            <v-card-title class="align-center">Podsumowanie</v-card-title>
            <v-card-text class="align-content-start">Suma: {{ order.totalPrice }}</v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                @click="
                setOrderStatus({ orderId: order.id, status: 'INPROGRESS' })
              "
                rounded
                color="green"
                dark
              >Potwierdz zamowienie</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CartPage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ order: "userActualOrder" })
  },
  methods: {
    ...mapActions(["setOrderStatus", "fetchUserActualOrder"])
  },
  created() {
    this.fetchUserActualOrder();
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
