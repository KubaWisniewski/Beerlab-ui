<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center" class="mb-4 elevation-4">
      <v-img width="100%" max-height="300px" src="@/assets/menu.png"> </v-img>
    </v-row>
    <v-row
      justify="center"
      :key="index"
      v-for="(beer, index) in beers"
      class="mb-2"
    >
      <BeerCard :beer="beer"></BeerCard>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BeerCard from "./BeerCard";
export default {
  name: "BeerPage",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchBeers"])
  },
  computed: {
    ...mapGetters(["beers"])
  },

  created() {
    this.fetchBeers();
  },
  components: {
    BeerCard
  }
};
</script>
