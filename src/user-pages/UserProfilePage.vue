<template>
  <v-card
    class="mx-auto background-color = grey lighten-1"
    max-width="1000"
    elevation = 3>
    <v-container class="fill-height text-center justify-start">
      <v-row justify="space-between">
        <v-col cols="auto">
          <div align-center>
            <div v-if="this.user != null">
              <v-avatar slot="offset" class="mx-auto d-block" size="250">
                <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg" />
              </v-avatar>
              <v-card-text class="text-xs-center">
                <p class=" black--text display-2 font-weight-bold color=black">{{ user["username"] }}</p>
              </v-card-text>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-data-table
      :headers="headers"
      :items="beers"
      :items-per-page="5"
      class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="black">
          <v-toolbar-title>Historia zamówień</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
import { mapGetters } from "vuex";

const axios = require("axios");
export default {
  data() {
    return {
      headers: [
          {
            text: 'ID zamówienia',
            align: 'left',
            sortable: false,
            value: 'id_zamowienia',
          },
          { text: 'Data'},
          { text: 'Status'},
          { text: 'Cena końcowa'},
        ],
      user: {}
    };
  },
  methods: {
    fetchUserInfo() {
      var token = JSON.parse(localStorage.getItem("user"));
      axios({
        headers: { "X-Auth-Token": token }
      })
        .get("localhost:8081/api/user/me")
        .then(response => {
          this.user = response.data;
        });
    }
  },
  created() {
    this.fetchUserInfo;
  },
  computed: {
    ...mapGetters({
      user: "authentication/user",
      loggedIn: "authentication/loggedIn"
    })
  }
};
</script>