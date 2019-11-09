<template>
  <v-row justify="center">
    <v-dialog v-model="dialogOn" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Nowe piwo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Marka piwa" v-model="beer.brand" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Opis piwa" v-model="beer.description"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Cena: " v-model="beer.price" type="number" min="0" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Ilość: "
                  type="number"
                  :rules="quantity"
                  v-model="beer.quantity"
                  min="1"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>Pola oznaczone * są wymagane</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogOn = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addNewBeer">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const axios = require("axios");
export default {
  name: "BeerAddDialog",
  data: () => ({
    dialogOn: true,

    beer: {
      description: "",
      brand: "",
      price: "",
      quantity: "",
      imgUrl: ""
    }
  }),
  methods: {
    onFileChange() {
      let reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(this.file);
    },
    addNewBeer() {
      axios.post("http://localhost:8081/api/beer", this.beer).then(() => {
        this.beer = {
          description: "",
          brand: "",
          price: "",
          quantity: "",
          imgUrl: ""
        };
        this.$notify({
          group: "auth",
          type: "success",
          title: "OK",
          text: "Dodano pomyslnie"
        });
      });
    },
    onUpload() {}
  }
};
</script>