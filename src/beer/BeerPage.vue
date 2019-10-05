<template>
  <v-container style="max-width:1000px;">
    <v-row :key="index" v-for="(beer, index) in beers">
      <beer-card :beer="beer"></beer-card>
    </v-row>
  </v-container>
</template>

<script>
import BeerCard from "./BeerCard";
const axios = require("axios");
export default {
  components: {
    BeerCard
  },
  name: "BeerPage",
  data() {
    return {
      beer: {},
      beers: [
        {
          imgUrl:
            "https://media.danmurphys.com.au/dmo/product/363586-1.png?impolicy=PROD_MD",
          name: "Pierwsze",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          imgUrl:
            "https://media.danmurphys.com.au/dmo/product/363586-1.png?impolicy=PROD_MD",
          name: "Drugie",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:8081/api/beer")
        .then(response => {
          //this.beers = response.data;
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
