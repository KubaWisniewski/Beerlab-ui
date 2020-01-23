<template>
  <v-card
    height="100%"
    class="d-flex flex-column elevation-12 orange lighten-5 justify-center ma-3"
  >
    <v-card-title class="justify-center black--text"
      ><h4>{{ beer.brand }}</h4></v-card-title
    >
    <v-divider></v-divider>
    <v-card-text class="justify-center">
      <v-img
        height="300px"
        contain
        :src="beer.imgUrl"
        class="ma-2 justify-center"
      />
      <v-divider></v-divider>
      <h4 class="font-weight-bold text-center">Opis:</h4>
      {{ beer.description }}
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-text class="text-center">
      <h4 class="font-weight-bold">Zostało {{ beer.quantity }} sztuk</h4>
      <span>Cena: {{ beer.price }} <v-icon>mdi-beer</v-icon></span>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn @click="addToCart({ beerId: beer.id, quantity: 1 })" color="green"
        >Zamów</v-btn
      >
    </v-card-actions>
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
