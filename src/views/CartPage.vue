<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/koszyk.jpeg">
      </v-img>
    </v-row>
      <v-row justify="center">
      <div class="align-center">

          <v-row
                    justify="center"
                    v-for="(orderItem, index) in order.orderItemsDto"
                    :key="index"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
            >

              <BeerCartCard :orderItem="orderItem" :order="order"></BeerCartCard>
          </v-row>
          <v-card class="ma-5 justify-center">
              <v-list-item>
                  <v-list-item-content class="justify-center headline font-weight-bold "> Podsumowanie </v-list-item-content>
              </v-list-item>
              <v-list-item>
                  <v-list-item-content class="justify-center">  Suma: {{ order.totalPrice }} </v-list-item-content>
              </v-list-item>
              <v-list-item>
                  <v-list-item-content class="align-center">
                      <v-card-actions class="justify-center">
                      <v-btn
                              @click="confirmOrder({userId: user})"
                              rounded
                              color="green"
                              dark
                      >
                          Potwierdz zamówienie
                      </v-btn>
                  </v-card-actions> </v-list-item-content>
              </v-list-item>
              <v-card-text class="justify-center">

              </v-card-text>

          </v-card>


      </div>
      </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BeerCartCard from "./BeerCartCard";
export default {
  name: "CartPage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ order: "userActualOrder", user: "user" })
  },
  methods: {
    ...mapActions(["setOrderStatus",
      "fetchUserActualOrder",
      "reduceQuantity",
      "deleteItemFromOrder",
      "addToCart",
      "increaseAmount",
      "confirmOrder"
    ])
  },
  created() {
    this.fetchUserActualOrder();
  },
  components: {
    BeerCartCard
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
