<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/koszyk.jpeg">
      </v-img>
    </v-row>
    <v-row class=" text-center justify-center">
      <div align-center>
        <v-row :key="index" v-for="(orderItem, index) in order.orderItemsDto">
          <v-card>
            <v-card-title>{{ orderItem.beerDto.brand }}</v-card-title>
            <v-card-text>
              Opis: {{ orderItem.beerDto.description }}
              <v-img
                height="200px"
                width="600"
                :src="orderItem.beerDto.imgUrl"
              />
            </v-card-text>
            <v-card-text
              class="headline text-left text-left font-weight-bold large"
            >
              Sztuk: <v-btn @click="reduceQuantity({orderId: order.id, beerId: orderItem.beerDto.id, quantity: orderItem.quantity})" class="v-counter md2">&mdash;</v-btn>
              <input type="text" class="md3" :value="orderItem.quantity" readonly>
              <v-btn @click="increaseAmount({beerId: orderItem.beerDto.id, quantity: 1})" class="v-counter md4">&#xff0b;</v-btn>

            </v-card-text>


            <v-card-actions class="headline text-left font-weight-bold large">
              <v-btn
                      @click="
                deleteItemFromOrder({ orderId: order.id, beerId: orderItem.beerDto.id })
              "
                      rounded
                      color="red"
                      dark
              >Usuń z zamówienia</v-btn>
            </v-card-actions>

            <v-card-text class="headline text-right font-weight-bold large"
              >Cena: {{ orderItem.beerDto.price }}
              <v-icon large>mdi-beer</v-icon>
            </v-card-text>



          </v-card>
        </v-row>
        <v-card>
          <v-card-title class="align-center"> Podsumowanie </v-card-title>
          <v-card-text class="align-content-start">
            Suma: {{ order.totalPrice }}
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              @click="
                confirmOrder({userId: user})
              "
              rounded
              color="green"
              dark
              >Potwierdz zamowienie</v-btn>
          </v-card-actions>
        </v-card>
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
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
