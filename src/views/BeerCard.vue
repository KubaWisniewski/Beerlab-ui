<template>
  <v-card class="elevation-12 orange lighten-2">
    <v-card-title class="justify-center black--text"><h4>{{ beer.brand }}</h4></v-card-title>
    <v-divider></v-divider>
    <v-list dense class="elevation-12 orange lighten-5">
      <v-list-item>
        <v-list-item-content class="align-center"> <v-img height="200px" width="600" :src="beer.imgUrl" /> </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="justify-start align-start"><h4 class="font-weight-bold">Opis:</h4> {{ beer.description }}</v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content class="justify-start"><h4 class="font-weight-bold">Ilość:</h4> {{ beer.quantity }}</v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-card-actions class="justify-center">
            <v-btn
                    @click="addToCart({ beerId: beer.id, quantity: 1 })"
                    rounded
                    color="green"
            >Zamów</v-btn
            >
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="headline justify-center font-weight-bold large d-inline"> Cena: {{ beer.price }} <v-icon large>mdi-beer</v-icon>  </v-list-item-content>
        <v-list-item-content class="justify-center">  </v-list-item-content>
      </v-list-item>
    </v-list>

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
