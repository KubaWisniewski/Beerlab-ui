<template>
  <v-card width="75%" class="elevation-12 orange lighten-5">
    <v-card-title class="justify-center">{{ beer.brand }}</v-card-title>
    <v-card-text class="text-center justify-center">
      Opis: {{ beer.description }}
      <v-img class="mx-auto" height="200px" width="600px" :src="beer.imgUrl" />
    </v-card-text>
    <v-card-text class="headline text-right font-weight-bold"
      >Cena: {{ beer.price }} <v-icon large>mdi-beer</v-icon>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn to="/cart" dark>Zamów</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BeerCard",
  props: {
    beer: {
      type: Object
    }
  }
};
</script>
