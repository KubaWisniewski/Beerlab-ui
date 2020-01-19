<template>
  <v-container class="justify-center">
    <v-data-table
      :headers="headers"
      :items="beers"
      :items-per-page="5"
      class="elevation-12 orange lighten-5 mt-4 mb-4"
    >
      <template v-slot:top>
        <v-toolbar class=" orange lighten-3">
          <v-toolbar-title>Piwa dostępne w menu</v-toolbar-title>
          <v-divider class="pa-5" inset vertical></v-divider>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="ma-2" v-on="on"
                >Dodaj piwo</v-btn
              >
            </template>
            <v-card class="elevation-12 orange lighten-5">
              <v-toolbar class=" orange lighten-3">
                <v-toolbar-title class="headline"
                  >Dodaj nowe piwo</v-toolbar-title
                >
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Marka piwa*"
                        type="text"
                        v-model="beer.brand"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Opis piwa*"
                        type="text"
                        v-model="beer.description"
                        required
                      ></v-text-field>
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
                      <v-text-field
                        label="Cena*: "
                        v-model="beer.price"
                        type="number"
                        min="0"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Ilość*: "
                        type="number"
                        step="1"
                        v-model="beer.quantity"
                        min="1"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Cena minimalna*: "
                        type="number"
                        step="1"
                        v-model="beer.minimalPrice"
                        min="0"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>Pola oznaczone '*' są wymagane</small>
              </v-card-text>
              <v-card-actions>
                <v-col>
                  <v-row>
                    <v-btn color="error darken-1" @click="dialog = false"
                      >Zamknij</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn color="success darken-1" @click="addNewBeer"
                      >Zapisz</v-btn
                    >
                  </v-row>
                </v-col>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          small
          class="ma-2"
          color="error"
          v-on:click.prevent="deleteBeer(item.id)"
          >Usuń</v-btn
        >
        <v-btn
          class="ma-2"
          small
          color="primary"
          v-on:click.prevent="editBeer(item.id)"
          >Edytuj</v-btn
        >
      </template>
      <template v-slot:item.imgUrl="{ item }">
        <v-img
          class="white--text"
          max-height="100  px"
          contain="true"
          aspect-ratio="1"
          :src="item.imgUrl"
        />
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import axios from "../services/axiosConfig";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BeerEditPage",
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Opis", value: "description" },
        { text: "Marka", value: "brand" },
        { text: "Cena", value: "price" },
        { text: "Ilosc", value: "quantity" },
        { text: "Zdjecie", value: "imgUrl" },
        { text: "Cena minimalna", value: "minimalPrice" },
        { text: "Akcja", value: "actions", sortable: false }
      ],
      dialog: false,
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
  computed: {
    ...mapGetters(["beers"])
  },
  methods: {
    ...mapActions(["fetchBeers", "deleteBeer"]),
    onFileChange() {
      let reader = new FileReader();
      reader.onload = () => {
        this.dialogImgUrl = reader.result;
      };
      reader.readAsDataURL(this.file);
    },
    addNewBeer() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("beerDto", JSON.stringify(this.beer));
      axios.post("/api/beer", formData).then(() => {
        this.fetchBeers();
        this.file = null;
        this.dialogImgUrl = null;
        this.beer = {
          description: "",
          brand: "",
          price: "",
          quantity: "",
          minimalPrice: ""
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
    editBeer(id) {
      axios.get("/api/beer/" + id).then(response => {
        this.fetchBeers();
        this.beer = response.data;
        this.dialog = true;
      });
    }
  },
  created() {
    this.fetchBeers();
  }
};
</script>
