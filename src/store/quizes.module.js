import quizService from "../services/quiz.service";

const initialState = {
  quizes: [],
  quiz: {}
};

export const quizes = {
  state: initialState,
  getters: {
    quizes: state => {
      return state.quizes;
    },
    quiz: state => {
      return state.quiz;
    }
  },
  actions: {
    fetchQuizes({ commit }) {
      quizService.fetchQuizes().then(response => {
        commit("setQuizes", response.data);
      });
    },
    joinQuiz({ commit }, quizId) {
      quizService.joinQuiz(quizId).then(response => {
        commit("setQuiz", response.data);
      });
    }
  },
  mutations: {
    setQuizes(state, data) {
      state.quizes = data;
    },
    setQuiz(state, data) {
      state.quiz = data;
    }
  }
};
