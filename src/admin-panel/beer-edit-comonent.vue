<template>
  <v-container style="max-width:1000px;">
    <v-data-table :headers="headers" :items="beers" :items-per-page="5" class="elevation-1">
      <template v-slot:item.id="{item}">
        <div class="my-1">
          <p>{{item.id}}</p>
          <v-btn small color="error" v-on:click.prevent="deleteBeer(item.id)">Usuń</v-btn>
          <v-btn small color="warning" v-on:click.prevent="editBeer(item.id)">Edytuj</v-btn>
        </div>
      </template>
      <template v-slot:item.imgUrl="{ item }">
        <v-img class="white--text" max-height="100  px" aspect-ratio="1" :src=" item.imgUrl" />
      </template>
    </v-data-table>
    <form>
      <!--  -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Dodaj piwo</v-btn>
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
                  <v-file-input
                    v-model="file"
                    type="file"
                    label="Wybierz zdjęcie..."
                    @change="onFileChange"
                  ></v-file-input>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Cena: " v-model="beer.price" type="number" min="0" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Ilość: "
                    type="number"
                    step="1"
                    v-model="beer.quantity"
                    min="1"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>Pola oznaczone '*' są wymagane</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Zamknij</v-btn>
            <v-btn color="blue darken-1" text @click="addNewBeer">Zapisz</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--  -->
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
      dialog: false,
      beers: [],
      file: null,
      dialogImgUrl: null,
      beer: {
        description: "",
        brand: "",
        price: "",
        quantity: ""
      }
    };
  },
  methods: {
    onFileChange() {
      let reader = new FileReader();
      reader.onload = () => {
        this.dialogImgUrl = reader.result;
      };
      reader.readAsDataURL(this.file);
    },
    fetchData() {
      axios.get("http://localhost:8081/api/beer").then(response => {
        this.beers = response.data;
      });
    },
    addNewBeer() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("beerDto", JSON.stringify(this.beer));
      axios.post("http://localhost:8081/api/beer", formData).then(() => {
        this.fetchData();
        this.file = null;
        this.dialogImgUrl = null;
        this.beer = {
          description: "",
          brand: "",
          price: "",
          quantity: ""
        };
        this.dialog = false;
        this.$notify({
          group: "auth",
          type: "success",
          title: "OK",
          text: "Dodano pomyslnie"
        });
      });
    },
    deleteBeer(id) {
      axios.delete("http://localhost:8081/api/beer/" + id).then(() => {
        this.fetchData();
      });
    },
    editBeer(id) {
      axios.get("http://localhost:8081/api/beer/" + id).then(response => {
        this.fetchData();
        this.beer = response.data;
        this.dialog = true;
      });
    }
  },

  created() {
    this.fetchData();
  }
};
</script>

<style scoped></style>
