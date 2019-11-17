<template>
  <v-card>
    <v-card-title>{{ beer.brand }}</v-card-title>
    <v-card-text>
        Opis: {{ beer.description }}
          <v-img class="white--text" height="200px" width="600" :src="beer.imgUrl" />
    </v-card-text>

    <v-card-actions class="justify-end">
      <router-link to="/cart">
        <v-btn rounded color = "black" dark>Zamów</v-btn>
      </router-link>
    </v-card-actions>

    <v-card-text class="headline text-right font-weight-bold large">Cena: {{ beer.price }} <v-icon large>mdi-beer</v-icon> </v-card-text>
    

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
