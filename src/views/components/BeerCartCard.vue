<template>
  <v-card class=" orange lighten-2">
    <v-card-title class="justify-center black--text"
      ><h4>{{ orderItem.beerDto.brand }}</h4></v-card-title
    >
    <v-divider></v-divider>
    <v-list dense class="col orange lighten-5">
      <v-list-item>
        <v-list-item-content class="align-center">
          <v-img  max-height="300px" max-width="300px" contain=true :src="orderItem.beerDto.imgUrl" />
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content
          class="headline text-center justify-center font-weight-bold large"
        >
          Sztuk
          <v-btn
            @click="
              increaseAmount({ beerId: orderItem.beerDto.id, quantity: 1 })
            "
            class="v-counter md4"
            >&#xff0b;</v-btn
          >
          {{ orderItem.quantity }}
          <v-btn
            @click="
              reduceQuantity({
                orderId: order.id,
                beerId: orderItem.beerDto.id,
                quantity: orderItem.quantity
              })
            "
            class="v-counter md2"
            >&mdash;</v-btn
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-card-actions class="justify-start d-inline">
            <v-btn
              @click="
                deleteItemFromOrder({
                  orderId: order.id,
                  beerId: orderItem.beerDto.id
                })
              "
              rounded
              color="red"
              >Usuń z zamówienia</v-btn
            >
          </v-card-actions>
        </v-list-item-content>

        <v-list-item-content
          class="headline justify-end font-weight-bold large d-inline"
        >
          Cena: {{ orderItem.beerDto.price }} <v-icon large>mdi-beer</v-icon>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BeerCartCard",
  data: () => ({}),
  props: {
    orderItem: {
      type: Object
    },
    order: {
      type: Object
    }
  },
  methods: {
    ...mapActions([
      "setOrderStatus",
      "fetchUserActualOrder",
      "reduceQuantity",
      "deleteItemFromOrder",
      "addToCart",
      "increaseAmount",
      "confirmOrder"
    ])
  }
};
</script>
