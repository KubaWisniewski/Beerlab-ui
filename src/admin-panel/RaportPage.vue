<template>
  <v-container>
    <v-card
      min-width="80%"
      class="text-center elevation-12 orange lighten-5 justify-center"
    >
      <v-toolbar class="grey lighten-2 black--text mb-4">
        <v-spacer></v-spacer>
        <v-toolbar-title>Statystyki</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card
        class="text-center justify-center grey lighten-2 pa-2 ma-auto elevation-6 black--text"
        max-width="80%"
      >
        <v-row class="justify-center font-weight-black"
          >Średni czas realizacji zamówienia: {{ realizationTime }}</v-row
        >
        <v-divider></v-divider>
        <v-row class="justify-center font-weight-black pa-2">
          <v-btn
            class="ma-2"
            small
            color="primary"
            v-on:click.prevent="getReport()"
            >Pobierz aktualny raport</v-btn
          >
        </v-row>
      </v-card>
      <v-spacer></v-spacer>

<v-card class="ma-5">
      <v-toolbar class="grey lighten-2 black--text mb-4">
        <v-spacer></v-spacer>
        <v-toolbar-title>Historia raportów</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-actions class="justify-center"></v-card-actions>
      <v-data-table
        :headers="headers"
        :items="reportsDto"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.start="{ item }">{{
          item.start | formatDate
        }}</template>
        <template v-slot:item.end="{ item }">{{
          item.end | formatDate
        }}</template>
        <template v-slot:item.actions="{ item }">
          <v-btn
            class="ma-2"
            small
            color="primary"
            v-on:click.prevent="getReportById(item.id)"
            >Wczytaj</v-btn
          >
        </template>
      </v-data-table>
</v-card>

     <v-card class="ma-5">

      <v-toolbar class="grey lighten-2 black--text mb-4">
        <v-spacer></v-spacer>
        <v-toolbar-title>Najbardziej popularne piwa</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>


       <template>
         <v-simple-table>
           <template v-slot:default>
             <tbody>
             <tr v-for="item in reportDto.mostPopularBeers" :key="item">
               <td>{{ item }}</td>
             </tr>
             </tbody>
           </template>
         </v-simple-table>
       </template>

     </v-card>

      <v-card class="mx-auto text-center" color="green" dark max-width="800">
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
            <v-sparkline
              :value="reportDto.avgBeerPrice"
              :autoLineWidth="true"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="10 "
              stroke-linecap="round"
              smooth
            >
              <template v-slot:label="item"
                >${{ item.value }}</template
              >
            </v-sparkline>
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="display-1 font-weight-thin">Zmiana cen piwa</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn block text v-on:click="createNewReport">Nowy raport</v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>
<script>
import axios from "../services/axiosConfig";
import Vue from "vue";
import moment from "moment";
import "moment/locale/pl";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RaportPage",

  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Od", value: "start" },
        { text: "Do", value: "end" },
        { text: "Ilosc uzytkownikow", value: "users" },
        { text: "Ilosc zamówień", value: "orders" },
        { text: "Potencjalny przychód", value: "potentialIncome"},
        { text: "Akcja", value: "actions", sortable: false }
      ],
      reportsDto: [],
      reportDto: {
        start: "",
        end: "",
        users: "",
        orders: "",
        potentialIncome: "",
        avgBeerPrice: [],
        mostPopularBeers: [],
      }
    };
  },
  methods: {
    getReport() {
      axios
        .get("/api/statistic")
        .then(response => {
          this.reportDto = response.data;
        })
        .catch(() => {
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Błąd",
            text: "Nie udało się pobrać czasu realizacji zamówienia."
          });
        });
    },
    createNewReport() {
      axios
        .get("/api/statistic/newReport")
        .then(() => {
          this.getReport();
          this.getAllReports();
        })
        .catch(() => {
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Błąd",
            text: "Nie udało się pobrać czasu realizacji zamówienia."
          });
        });
    },
    getAllReports() {
      axios.get("/api/statistic/all").then(response => {
        this.reportsDto = response.data;
      });
    },
    getReportById(id) {
      axios.get("/api/statistic/" + id).then(response => {
        this.reportDto = response.data;
      });
    },
    ...mapActions(["getRealizationTime"])
  },
  computed: {
    ...mapGetters(["realizationTime"])
  },
  mounted() {
    this.getRealizationTime();
    moment.locales("PL");
    this.getReport();
    this.getAllReports();
  }
};
</script>
