<template>
  <v-container>
    <v-row
      :key="index"
      v-for="(quiz, index) in quizzes"
      justify="center"
      class="sm-4"
    >
      <QuizAdminCard :quiz="quiz"></QuizAdminCard>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../services/axiosConfig";
import QuizAdminCard from "./QuizAdminCard";
export default {
  name: "QuizAdminPage",

  data() {
    return {
      quizzes: []
    };
  },
  methods: {
    getAllQuizzes() {
      axios.get("/api/quiz").then(response => {
        this.quizzes = response.data;
      });
    }
  },
  components: {
    QuizAdminCard
  },
  created() {
    this.getAllQuizzes();
  }
};
</script>
