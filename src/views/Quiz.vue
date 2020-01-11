<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-col>
        <v-container v-if="quiz">
          <v-card v-if="done" class="elevation-12 orange lighten-5">
            <v-card-title
              ><v-spacer></v-spacer>Gratulacje! Uzyskałeś
              {{ score }} punktów.<v-spacer></v-spacer
            ></v-card-title>
            <v-card-text>
              <div v-if="mistakes.length > 0">
                <h3>Twoje błędy:</h3>
                <p v-for="(m, i) in mistakes" :key="i">
                  Pytanie: {{ m.question }} <br />
                  Twoja odpowiedź: {{ m.chosenAnswer }} <br />
                  Prawidłowa odpowiedź {{ m.rightAnswer }}
                  <br />
                </p>
              </div>
            </v-card-text>
            <v-card-actions
              ><v-spacer></v-spacer>
              <v-btn color="primary" to="/">Wróć do strony głównej</v-btn
              ><v-spacer></v-spacer
            ></v-card-actions>
          </v-card>
          <v-card v-else>
            <v-stepper v-model="step" class="elevation-12 orange lighten-5">
              <v-stepper-header>
                <template v-for="s in quiz.questionDtoList.length">
                  <v-stepper-step :key="s" :step="s" :complete="step > s" />
                </template>
                <v-divider></v-divider>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content
                  v-for="(question, i) in quiz.questionDtoList"
                  :key="i"
                  :step="i + 1"
                >
                  <h3>{{ question.text }}</h3>
                  <v-radio-group v-model="stepAnswer" class="pa-2">
                    <v-radio
                      v-for="(answer, j) in question.answerDtoList"
                      :key="j"
                      :label="answer.text"
                      :value="j"
                    ></v-radio>
                  </v-radio-group>
                  <v-btn color="primary" @click.native="next">Dalej</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import quizService from "../services/quiz.service";

export default {
  name: "Quiz",
  mounted() {
    this.joinQuiz(this.$route.params.quizId);
  },
  computed: {
    ...mapGetters(["quiz"])
  },
  methods: {
    ...mapActions(["joinQuiz"]),
    next() {
      if (this.stepAnswer == null) return;
      const question = this.quiz.questionDtoList[this.step - 1];
      const answer = question.answerDtoList[this.stepAnswer];
      quizService.voteOnAnswer(answer.id);
      if (answer.correct) this.score += 1;
      else {
        this.mistakes.push({
          question: question.text,
          rightAnswer: question.answerDtoList.find(answer => answer.correct)
            .text,
          chosenAnswer: answer.text
        });
      }
      if (this.step < this.quiz.questionDtoList.length) {
        this.step++;
        this.stepAnswer = null;
      } else {
        this.done = true;
      }
    }
  },
  data() {
    return {
      quizId: this.$route.params.quizId,
      step: 1,
      score: 0,
      stepAnswer: null,
      done: false,
      mistakes: []
    };
  }
};
</script>
