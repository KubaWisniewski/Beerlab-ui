<template>
  <v-card>
    <v-card-title>{{ beer.brand }}</v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="10">Opis: {{ beer.description }}</v-col>
        <v-col cols="2">
          <v-img class="white--text" height="300px" :src="beer.imgUrl" />
        </v-col>
        <v-col cols="10">Cena: {{ beer.price }}</v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn outlined>Kup</v-btn>
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

<style scoped></style>
