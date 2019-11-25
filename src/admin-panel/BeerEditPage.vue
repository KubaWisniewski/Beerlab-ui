<template>
  <v-container style="max-width:1000px;">
    <v-data-table
      :headers="headers"
      :items="beers"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.id="{ item }">
        <div class="my-1">
          <p>{{ item.id }}</p>
          <v-btn small color="error" v-on:click.prevent="deleteBeer(item.id)"
            >Delete</v-btn
          >
        </div>
      </template>
      <template v-slot:item.imgUrl="{ item }">
        <v-img
          class="white--text"
          max-height="100  px"
          aspect-ratio="1"
          :src="item.imgUrl"
        />
      </template>
    </v-data-table>
    <!--  -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Dodaj piwo</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Dodaj nowe piwo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Marka piwa"
                  v-model="beer.brand"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Opis piwa"
                  v-model="beer.description"
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
                  label="Cena: "
                  v-model="beer.price"
                  type="number"
                  min="0"
                  required
                ></v-text-field>
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
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Zamknij</v-btn
          >
          <v-btn color="blue darken-1" text @click="addNewBeer">Dodaj</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "../services/axiosConfig";
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
      file: null,
      dialogImgUrl: null,
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
        this.beer = {
          description: "",
          brand: "",
          price: "",
          quantity: "",
          imgUrl: ""
        };
        this.dialog = false;
        this.$notify({
          group: "auth",
          type: "success",
          title: "OK",
          text: "Dodano pomyslnie"
        });
      });
    }
  },

  computed: {
    ...mapGetters(["beers"])
  },

  created() {
    this.fetchBeers();
  }
};
</script>
