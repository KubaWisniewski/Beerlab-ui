import reportService from "../services/report.service";

const initialState = {
  realizationTime: null
};

export const report = {
  state: initialState,
  getters: {
    realizationTime: state => {
      return state.realizationTime;
    }
  },
  actions: {
    getRealizationTime({ commit }) {
      reportService.getRealizationTime().then(response => {
        commit("setRealizationTime", response.data);
      });
    }
  },
  mutations: {
    setRealizationTime(state, data) {
      state.realizationTime = data;
    }
  }
};
