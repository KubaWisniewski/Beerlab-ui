<template>
  <v-container class="justify-center">
    <v-data-table
      :headers="headers"
      :items="quizzes"
      :items-per-page="5"
      class="elevation-12 orange lighten-5 mt-4 mb-4"
    >
      <template v-slot:top>
        <v-toolbar class=" orange lighten-3">
          <v-toolbar-title>Lista quizów</v-toolbar-title>
          <v-divider class="pa-5" inset vertical></v-divider>
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="ma-2" v-on="on"
                >Dodaj Quiz</v-btn
              >
            </template>
            <v-card class="elevation-12 orange lighten-5">
              <v-toolbar class=" orange lighten-3">
                <v-toolbar-title class="headline"
                  >Dodaj nowy quiz</v-toolbar-title
                >
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Nazwa quizu*"
                        type="text"
                        v-model="quiz.name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Opis quizu*"
                        type="text"
                        v-model="quiz.description"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="file"
                        type="file"
                        label="Wybierz zdjęcie..."
                        @change="onFileChange"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                      <div>
                        Wybierz date rozpoczecia quizu:
                      </div>
                      <v-flex xs4>
                        <v-datetime-picker v-model="quiz.startDate">
                          <template slot="dateIcon">
                            DATA
                          </template>
                          <template slot="timeIcon">
                            GODZINA
                          </template>
                        </v-datetime-picker>
                      </v-flex>
                    </v-col>

                    <v-col cols="12">
                      <div>
                        Wybierz date zakończenia quizu:
                      </div>
                      <v-flex xs4>
                        <v-datetime-picker v-model="quiz.endDate">
                          <template slot="dateIcon">
                            DATA
                          </template>
                          <template slot="timeIcon">
                            GODZINA
                          </template>
                        </v-datetime-picker>
                      </v-flex>
                    </v-col>
                    <v-col cols="12">
                      <v-switch
                        v-model="quiz.active"
                        class="mx-2"
                        label="Aktywny*"
                      ></v-switch>
                    </v-col>
                  </v-row>
                </v-container>
                <small>Pola oznaczone '*' są wymagane</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error darken-1" @click="dialog = false"
                  >Zamknij</v-btn
                >
                <v-btn color="success darken-1" @click="addNewQuiz"
                  >Zapisz</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- -->
          <v-dialog v-model="dialogEdit" persistent>
            <v-card class="elevation-12 orange lighten-5">
              <v-toolbar class=" orange lighten-3">
                <v-toolbar-title class="headline">Edytuj quiz</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Nazwa quizu*"
                        type="text"
                        v-model="quiz.name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Opis quizu*"
                        type="text"
                        v-model="quiz.description"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="file"
                        type="file"
                        label="Wybierz zdjęcie..."
                        @change="onFileChange"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                      <div>
                        Wybierz date rozpoczecia quizu:
                      </div>
                      <v-flex xs4>
                        <v-datetime-picker v-model="quiz.startDate">
                          <template slot="dateIcon">
                            DATA
                          </template>
                          <template slot="timeIcon">
                            GODZINA
                          </template>
                        </v-datetime-picker>
                      </v-flex>
                    </v-col>

                    <v-col cols="12">
                      <div>
                        Wybierz date zakończenia quizu:
                      </div>
                      <v-flex xs4>
                        <v-datetime-picker v-model="quiz.endDate">
                          <template slot="dateIcon">
                            DATA
                          </template>
                          <template slot="timeIcon">
                            GODZINA
                          </template>
                        </v-datetime-picker>
                      </v-flex>
                    </v-col>
                    <v-col cols="12">
                      <v-switch
                        v-model="quiz.active"
                        class="mx-2"
                        label="Aktywny*"
                      ></v-switch>
                    </v-col>
                  </v-row>
                </v-container>
                <small>Pola oznaczone '*' są wymagane</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error darken-1" @click="dialogEdit = false"
                  >Zamknij</v-btn
                >
                <v-btn color="success darken-1" @click="updateQuiz()"
                  >Zapisz</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- -->
        </v-toolbar>
      </template>
      <template v-slot:item.active="{ item }"
        ><div v-if="item.active == true">AKTYWNY</div>
        <div v-if="item.active == false">NIE AKTYWNY</div>
      </template>
      <template v-slot:item.startDate="{ item }">{{
        item.startDate | formatDate
      }}</template>
      <template v-slot:item.endDate="{ item }">{{
        item.endDate | formatDate
      }}</template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          class="ma-2"
          small
          color="primary"
          v-on:click.prevent="editQuiz(item.id)"
          >Edytuj</v-btn
        >
        <v-btn
          class="ma-2"
          small
          color="primary"
          v-on:click.prevent="changeStatus(item.id)"
          >Zmień status</v-btn
        >
        <v-btn
          class="ma-2"
          small
          color="primary"
          v-on:click.prevent="getQuestion(item.id)"
          >Pytania</v-btn
        >
      </template>
      <template v-slot:item.imgUrl="{ item }">
        <v-img
          class="white--text"
          max-height="100  px"
          aspect-ratio="1"
          :src="item.imgUrl"
        />
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import axios from "../services/axiosConfig";
import Vue from "vue";
import moment from "moment";
import "moment/locale/pl";
export default {
  name: "QuizAdminPage",

  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Nazwa", value: "name" },
        { text: "Opis", value: "description" },
        { text: "Data rozpoczęcia", value: "startDate" },
        { text: "Data zakończenia", value: "endDate" },
        { text: "Aktywny", value: "active" },
        { text: "Zdjecie", value: "imgUrl" },
        { text: "Akcja", value: "actions", sortable: false }
      ],
      modalStart: false,
      modalEnd: false,
      dialog: false,
      dialogEdit: false,
      quizEditId: "",
      file: null,
      dialogImgUrl: null,
      quiz: {
        name: "",
        description: "",
        startDate: new Date().toISOString().substr(0, 10),
        endDate: new Date().toISOString().substr(0, 10),
        isActive: ""
      },
      quizzes: []
    };
  },
  methods: {
    addNewQuiz() {
      //let formData = new FormData();
      //formData.append("file", this.file);
      // formData.append("quiz", JSON.stringify(this.quiz));
      axios.post("/api/quiz", this.quiz).then(() => {
        this.getAllQuizzes();
        this.file = null;
        this.dialogImgUrl = null;
        this.quiz = {
          name: "",
          description: "",
          startDate: "",
          endDate: "",
          isActive: ""
        };
        this.dialog = false;
        this.$notify({
          group: "auth",
          type: "success",
          title: "OK",
          text: "Dodano pomyslnie"
        });
      });
    },
    editQuiz(id) {
      axios.get("/api/quiz/" + id).then(response => {
        this.getAllQuizzes();
        this.quiz = response.data;
        this.dialogEdit = true;
        this.quizEditId = id;
      });
    },
    onFileChange() {
      let reader = new FileReader();
      reader.onload = () => {
        this.dialogImgUrl = reader.result;
      };
      reader.readAsDataURL(this.file);
    },
    getAllQuizzes() {
      axios.get("/api/quiz").then(response => {
        this.quizzes = response.data;
      });
    },
    save(date) {
      this.$refs.dialog.save(date);
    },
    changeStatus(id) {
      axios.post("/api/quiz/changeStatus/" + id).then(() => {
        this.getAllQuizzes();
      });
    },
    getQuestion(id) {
      this.$router.push({ path: `/admin/quiz/${id}` });
    },
    updateQuiz() {
      axios.put("api/quiz/" + this.quizEditId, this.quiz).then(() => {
        this.quiz = {
          name: "",
          description: "",
          startDate: "",
          endDate: "",
          isActive: ""
        };
        this.dialogEdit = false;
        this.getAllQuizzes();
      });
    }
  },
  created() {
    this.getAllQuizzes();
    Vue.filter("formatDate", function(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY HH:mm:ss");
      }
    });
    //this.interval = setInterval(() => this.getAllQuizzes(), 5000);
  }
};
</script>
