<template>
  <v-container style="max-width:1000px;">
    <v-data-table
      :headers="headers"
      :items="beers"
      :item-key="id"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.id="{item}">
        <div class="my-1">
          <p>{{item.id}}</p>
          <v-btn small color="error" v-on:click.prevent="deleteBeer(item.id)">Delete</v-btn>
        </div>
      </template>
      <template v-slot:item.imgUrl="{ item }">
        <v-img class="white--text" max-height="100  px" aspect-ratio="1" :src=" item.imgUrl" />
      </template>
    </v-data-table>
    <form>
      <v-text-field v-model="beer.description" label="Opis" required></v-text-field>
      <v-text-field v-model="beer.brand" label="Marka" required></v-text-field>
      <v-text-field v-model="beer.price" label="Cena" required></v-text-field>
      <v-text-field v-model="beer.quantity" label="Ilosc" required></v-text-field>

      <v-btn class="mr-4" v-on:click.prevent="addNewBeer">Dodaj</v-btn>
    </form>
  </v-container>
</template>
<script>
const axios = require("axios");
export default {
  name: "BeerEditComponent",
  data() {
    return {
      headers: [
        { text: "", value: "id", sortable: false },
        { text: "opis", value: "description" },
        { text: "marka", value: "brand" },
        { text: "cena", value: "price" },
        { text: "Ilosc", value: "quantity" },
        { text: "Zdjecie", value: "imgUrl" }
      ],
      beers: [],
      beer: {
        description: "",
        brand: "",
        price: "",
        quantity: "",
        imgUrl: ""
      }
    };
  },
  methods: {
    fetchData() {
      axios.get("http://localhost:8081/api/beer").then(response => {
        this.beers = response.data;
      });
    },
    addNewBeer() {
      axios
        .post("http://localhost:8081/api/beer", this.beer)
        .then(this.fetchData());
    },
    deleteBeer(id) {
      axios
        .delete("http://localhost:8081/api/beer/" + id)
        .then(this.fetchData());
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped></style>
