<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center" class="mb-4 elevation-4">
      <v-img width="100%" max-height="300px" src="@/assets/menu.png"> </v-img>
    </v-row>
    <v-data-iterator
      :items="beers"
      row
      wrap
      :items-per-page.sync="beersPerPage"
      :footer-props="{ beersPerPageOptions }"
      justify="center"
      content-tag="v-layout"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            justify="center"
            v-for="beer in beers"
            :key="beer.brand"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <BeerCard :beer="beer"></BeerCard>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BeerCard from "./components/BeerCard";
export default {
  name: "BeerPage",
  data() {
    return {
      beersPerPageOptions: [4, 8, 12],
      beersPerPage: 4
    };
  },
  methods: {
    ...mapActions(["fetchBeers"]),
    pollData() {
      this.polling = setInterval(() => this.fetchBeers(), 3000);
    }
  },
  computed: {
    ...mapGetters(["beers"])
  },

  mounted() {
    this.fetchBeers();
    this.pollData();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  components: {
    BeerCard
  }
};
</script>
