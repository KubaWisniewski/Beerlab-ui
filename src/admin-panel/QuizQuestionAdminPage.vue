<template>
  <v-container class="justify-center">
    <div v-for="item in quiz.questionDtos" v-bind:key="item.id">
      <v-card class="ma-2 d-flex flex-column elevation-12 orange lighten-2">
        <v-card-title class="justify-center black--text"
          ><h4>{{ item.text }}</h4></v-card-title
        >
        <v-divider></v-divider>
        <h4 class="justify-center font-weight-bold">ODPOWIEDZI :</h4>
        <div v-for="answer in item.answerDtoList" v-bind:key="answer.id">
          <v-list-item>
            <v-list-item-content class="justify-start align-start">
              {{ answer.text }}</v-list-item-content
            >
          </v-list-item>
        </div>
        <v-card-actions>
          <v-btn
            class="ma-2"
            small
            color="primary"
            v-on:click.prevent="editQuestion(item.id)"
            >Edytuj</v-btn
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
      questionId: "",
      dialog: false,
      question: {
        text: "",
        answers: [
          { text: "", imgUrl: "ww", isCorrect: true },
          { text: "JAJECZKO", imgUrl: "ww", isCorrect: "false" }
        ]
      },

      quiz: {
        questionDtos: {
          text: "",
          imgUrl: "",
          answerDtoList: {
            text: ""
          }
        }
      }
    };
  },
  methods: {
    getQuizById(id) {
      axios.get("/api/quiz/" + id).then(response => {
        this.quiz = response.data;
      });
    },
    editQuestion(id) {
      this.questionId = id;
      axios.get("/api/quiz/getQuestion/" + id).then(response => {
        this.question = response.data;
        this.dialog = true;
      });
    },
    saveEditedQuestion() {
      axios
        .post("/api/quiz/updateQuestion/" + this.questionId, this.question)
        .then(() => {
          this.getQuizById(this.id);
        });
    },
    createQuestion() {
      axios
        .post("/api/quiz/createQuestion/" + this.id, this.question)
        .then(() => {
          this.getQuizById(this.id);
        });
    }
  },
  created() {
    this.getQuizById(this.id);
  }
};
</script>
