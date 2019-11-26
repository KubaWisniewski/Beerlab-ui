<template>
  <v-card>
    <v-card-title>{{ beer.brand }}</v-card-title>
    <v-card-text>
        Opis: {{ beer.description }}
        Ilosc: {{ beer.quantity }}
          <v-img class="white--text" height="200px" width="600" :src="beer.imgUrl" />
    </v-card-text>

    <v-card-actions class="justify-end">
<!--      <router-link to="/cart">-->
        <v-btn @click="addToCart" rounded color = "black" dark>Zamów</v-btn>
<!--      </router-link>-->
    </v-card-actions>

    <v-card-text class="headline text-right font-weight-bold large">Cena: {{ beer.price }} <v-icon large>mdi-beer</v-icon> </v-card-text>
    

  </v-card>
</template>


<script>
    const axios = require("axios");

export default {
  name: "BeerCard",
    data: ()=> ({
      beer: {},
    }),
  props: {
    beer: {
      type: Object
    }
  },
    methods: {
        addToCart(){
            axios.post("http://localhost:8081/api/order", {
                    beerId: this.beer.id,
                    quantity: 1
                },
                {
                    headers: {
                      // "Content-Type": "application/json",
                       "X-Auth-Token": localStorage.getItem("token").replace(/"/g, "")
                    }
                });
        }
    }
};
</script>

<style scoped></style>
