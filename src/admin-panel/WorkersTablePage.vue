<template>
  <v-container class="justify-center">
    <v-data-table
      :headers="headers"
      :items="workers"
      :items-per-page="5"
      class="elevation-12 orange lighten-5 mt-4 mb-4"
    >
      <template v-slot:top>
        <v-toolbar class=" orange lighten-3">
          <v-toolbar-title>Pracownicy</v-toolbar-title>
          <v-divider class="pa-5" inset vertical></v-divider>
          <RegisterNewWorker></RegisterNewWorker>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import RegisterNewWorker from "./RegisterNewWorker";

export default {
  name: "WorkersTablePage",
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Nazwa użytkownika", value: "username" },
        { text: "E-mail", value: "email" }
      ]
    };
  },
  components: {
    RegisterNewWorker
  },
  computed: {
    ...mapGetters(["workers"])
  },
  methods: {
    ...mapActions(["fetchWorkers"])
  },
  created() {
    this.fetchWorkers();
  }
};
</script>
