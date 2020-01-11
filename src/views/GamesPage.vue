<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/quiz.png"></v-img>
    </v-row>
    <v-row justify="center" v-if="quizes.length === 0">
      <v-card class="text-center ma-4 elevation-12" color="orange lighten-2">
        <v-card-title>
          Aktualnie nie ma żadnych nowych quizów, wróć później!
        </v-card-title>
      </v-card>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="4" v-for="(quiz, index) in quizes" :key="index">
        <v-card class="ma-2 elevation-12 orange lighten-5">
          <v-card-title primary-title>
            <div class="headline">{{ quiz.name }}</div>
          </v-card-title>
          <v-card-text>{{ quiz.description }}</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark :to="'/games/' + quiz.id">Weź udział!</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "GamesPage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["quizes"])
  },
  methods: {
    ...mapActions(["fetchQuizes"])
  },
  mounted() {
    this.fetchQuizes();
  }
};
</script>
