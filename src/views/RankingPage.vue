<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/ranking.jpeg">
      </v-img>
    </v-row>
    <v-row class="justify-center">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-12 orange lighten-5 mt-4 mb-4"
      >
        <template v-slot:top>
          <v-toolbar class=" orange lighten-3">
            <v-toolbar-title>Wyniki</v-toolbar-title>
            <v-divider class="pa-5" inset vertical></v-divider>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>
<script>
import quizService from "../services/quiz.service";

export default {
  name: "ContactPage",
  data() {
    return {
      items: [],
      headers: [
        { text: "Nazwa użytkownika", value: "username" },
        { text: "Ilość quizów", value: "numberOfDoneQuizes" },
        { text: "Ilość punktów", value: "totalScore" }
      ]
    };
  },
  created() {
    quizService.getUsersScore().then(response => (this.items = response.data));
  }
};
</script>
