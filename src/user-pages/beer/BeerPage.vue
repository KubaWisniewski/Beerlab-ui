<template>
  <v-container class="fill-height text-center justify-center">
    <div align-center>
      <v-row :key="index" v-for="(beer, index) in beers">
        <BeerCard :beer="beer"></BeerCard>
      </v-row>
    </div>
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
      beers: []
    };
  },
  methods: {
    fetchData() {
      axios.get("http://localhost:8081/api/beer").then(response => {
        this.beers = response.data;
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
