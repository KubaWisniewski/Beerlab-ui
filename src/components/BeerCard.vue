<template>
  <v-card>
    <v-card-title>{{ beer.brand }}</v-card-title>
    <v-card-text>
      Opis: {{ beer.description }} Ilosc: {{ beer.quantity }}
      <v-img height="200px" width="600" :src="beer.imgUrl" />
    </v-card-text>

    <v-card-actions class="justify-end">
      <v-btn
        @click="addToCart({ beerId: beer.id, quantity: 1 })"
        rounded
        color="black"
        dark
        >Zamów</v-btn
      >
    </v-card-actions>

    <v-card-text class="headline text-right font-weight-bold large"
      >Cena: {{ beer.price }} <v-icon large>mdi-beer</v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BeerCard",
  data: () => ({}),
  props: {
    beer: {
      type: Object
    }
  },
  methods: {
    ...mapActions(["fetchBeers", "addToCart"])
  }
};
</script>

<style scoped></style>
