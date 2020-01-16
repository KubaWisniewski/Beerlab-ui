<template>
  <v-card height="100%" class="elevation-12 orange lighten-2 mx-auto">
    <v-card-text align-items="stretch">
      <v-card-title class="justify-center black--text"
        ><h4>{{ beer.brand }}</h4></v-card-title
      >
      <v-divider></v-divider>
      <v-img height="300px" width="300px" contain="true" :src="beer.imgUrl" />

      <h4 class="font-weight-bold">Opis:</h4>
      {{ beer.description }}
      <v-divider></v-divider>

      <h4 class="font-weight-bold">Ilość:</h4>
      {{ beer.quantity }}

      Cena: {{ beer.price }}
      <v-icon>mdi-beer</v-icon>
      <v-card-actions class="justify-center">
        <v-btn
          @click="addToCart({ beerId: beer.id, quantity: 1 })"
          rounded
          color="green"
          >Zamów</v-btn
        >
      </v-card-actions>
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
