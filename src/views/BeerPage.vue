<template>
  <v-container>
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
