<template>
  <v-container class="justify-center">
    <div v-for="item in answers" v-bind:key="item.id">
      <v-card
        height="300"
        max-width="300"
        class="ma-2 d-flex flex-column elevation-12 orange lighten-2"
      >
        <v-card-title class="justify-center black--text"
          ><h4>{{ item.text }}</h4></v-card-title
        >
        <div v-if="item.correct == true">
          Odpowiedź prawidłowa.
        </div>
        <div v-if="item.correct == false">
          Odpowiedź błędna.
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            class="ma-2"
            small
            color="primary"
            v-on:click.prevent="editAnswer(item.id)"
            >Edytuj</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn :disabled="answers.length == 4" class="ma-2" v-on="on"
          >Dodaj odpowiedz</v-btn
        >
      </template>
      <v-card class="elevation-12 orange lighten-5">
        <v-toolbar class=" orange lighten-3">
          <v-toolbar-title class="headline"
            >Dodaj nową odpowiedź</v-toolbar-title
          >
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Nazwa odpowiedzi*"
                  type="text"
                  v-model="answer.text"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-switch
              v-model="answer.isCorrect"
              class="mx-2"
              label="Odpowiedz prawidłowa ?*"
            ></v-switch>
          </v-container>
          <small>Pola oznaczone '*' są wymagane</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" @click="dialog = false">Zamknij</v-btn>
          <v-btn color="success darken-1" @click="addAnswer()">Zapisz</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- -->

    <v-dialog v-model="dialogEdit" persistent>
      <v-card class="elevation-12 orange lighten-5">
        <v-toolbar class=" orange lighten-3">
          <v-toolbar-title class="headline"
            >Dodaj nową odpowiedź</v-toolbar-title
          >
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Nazwa odpowiedzi*"
                  type="text"
                  v-model="answer.text"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-switch
              v-model="answer.isCorrect"
              class="mx-2"
              label="Odpowiedz prawidłowa ?*"
            ></v-switch>
          </v-container>
          <small>Pola oznaczone '*' są wymagane</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" @click="dialogEdit = false"
            >Zamknij</v-btn
          >
          <v-btn color="success darken-1" @click="updateAnswer()">Zapisz</v-btn>
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
      dialogEdit: false,
      editAnswerId: "",
      canAddNewAnswer: true,
      answers: [],
      answer: {
        text: "",
        isCorrect: ""
      }
    };
  },
  methods: {
    getAnswers(id) {
      axios.get("/api/quiz/" + id + "/answers").then(response => {
        this.answers = response.data;
      });
    },
    addAnswer() {
      axios.post("api/quiz/" + this.id + "/addAnswer", this.answer).then(() => {
        this.getAnswers(this.id);
        this.answer = {
          text: "",
          isCorrect: ""
        };
        this.dialog = false;
      });
    },
    updateAnswer() {
      axios
        .put(
          "api/quiz/" + this.id + "/updateAnswer/" + this.editAnswerId,
          this.answer
        )
        .then(() => {
          this.answer = {
            text: "",
            isCorrect: ""
          };
          this.dialogEdit = false;
          this.getAnswers(this.id);
        });
    },
    editAnswer(answerId) {
      this.editAnswerId = answerId;
      this.dialogEdit = true;
    }
  },

  created() {
    this.getAnswers(this.id);
  }
};
</script>
