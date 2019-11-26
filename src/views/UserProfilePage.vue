<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/profil.jpeg">
      </v-img>
    </v-row>
    <v-col class="pa-0">
      <v-card class="mb-2 text-center elevation-12 orange lighten-5">
        <v-card-text v-if="user != null">
          <v-avatar class="mx-auto" size="150">
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            />
          </v-avatar>

          <h4 class="mx-auto">Witaj: {{ user.username }}</h4>
          Stan konta : {{ user.balance }} Kufli.
        </v-card-text>
      </v-card>
      <v-data-table
        :headers="headers"
        :items="beers"
        :items-per-page="5"
        class=" elevation-12 orange lighten-5"
      >
        <template v-slot:top>
          <v-toolbar class="orange lighten-2">
            <v-toolbar-title>Historia zamówień</v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    headers: [
      {
        text: "ID zamówienia",
        align: "left",
        sortable: false,
        value: "id_zamowienia"
      },
      { text: "Data" },
      { text: "Status" },
      { text: "Cena końcowa" }
    ]
  }),
  computed: {
    ...mapGetters(["loggedIn", "user", "beers"])
  }
};
</script>
