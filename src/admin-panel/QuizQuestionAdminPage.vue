<template>
  <v-container class="justify-center">
    <div v-for="item in questions" v-bind:key="item.id">
      <v-card
        height="200px"
        width="300px"
        class="ma-2 elevation-12 orange lighten-2"
      >
        <v-card-title class="justify-center black--text"
          ><h4>{{ item.text }}</h4></v-card-title
        >
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            class="ma-2"
            small
            color="red"
            v-on:click.prevent="deleteQuestion(item.id)"
            >Usuń</v-btn
          >
          <v-btn
            class="ma-2"
            small
            color="primary"
            v-on:click.prevent="answers(item.id)"
            >Odpowiedzi</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="ma-2" v-on="on">Dodaj pytanie</v-btn>
      </template>
      <v-card class="elevation-12 orange lighten-5">
        <v-toolbar class=" orange lighten-3">
          <v-toolbar-title class="headline">Dodaj nowe pytanie</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Nazwa pytania*"
                  type="text"
                  v-model="question.text"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>Pola oznaczone '*' są wymagane</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" @click="dialog = false">Zamknij</v-btn>
          <v-btn color="success darken-1" @click="createQuestion()"
            >Zapisz</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "../services/axiosConfig";

export default {
  data() {
    return {
      id: this.$route.params.id,
      dialog: false,
      question: {
        text: ""
      },
      questions: [],
      quiz: {
        questionDtos: {
          text: "",
          imgUrl: ""
        }
      }
    };
  },
  methods: {
    getQuestionsForQuiz(id) {
      axios.get("/api/quiz/" + id + "/questions").then(response => {
        this.questions = response.data;
      });
    },
    deleteQuestion(questionId) {
      axios
        .delete("/api/quiz/" + this.id + "/deleteQuestion/" + questionId)
        .then(() => {
          this.getQuestionsForQuiz(this.id);
        });
    },

    createQuestion() {
      axios
        .post("/api/quiz/" + this.id + "/addQuestion/", this.question)
        .then(() => {
          this.getQuestionsForQuiz(this.id);
          this.dialog = false;
        });
    },
    answers(questionId) {
      this.$router.push({ path: `/admin/quiz/answer/${questionId}` });
    }
  },
  created() {
    this.getQuestionsForQuiz(this.id);
  }
};
</script>
