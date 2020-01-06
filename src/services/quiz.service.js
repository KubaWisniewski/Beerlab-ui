import axios from "./axiosConfig";
import Vue from "vue";

const quizService = {
  fetchQuizes,
  joinQuiz,
  voteOnAnswer,
  getUsersScore
};
async function fetchQuizes() {
  return await axios
    .get("/api/quiz/user")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać quizów."
      });
    });
}
async function joinQuiz(quizId) {
  return await axios
    .post("/api/quiz/joinQuiz/" + quizId)
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się dołączyć do quizu."
      });
    });
}
async function voteOnAnswer(answerId) {
  return await axios
    .post("/api/quiz/voteOnAnswer/" + answerId)
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się zapisać odpowiedzi do quizu."
      });
    });
}
async function getUsersScore() {
  return await axios
    .get("/api/quiz/ranking")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać wyników."
      });
    });
}
export default quizService;
