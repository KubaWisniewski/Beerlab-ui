import axios from "./axiosConfig";
import Vue from "vue";

const quizService = {
  getAllQuizzes
};
async function getAllQuizzes() {
  return await axios
    .get("/api/quiz")
    .then(response => {
      return response.data;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać zamówień."
      });
    });
}
export default quizService;
