import messageService from "../services/message.service";

const initialState = {
  messages: []
};

export const messages = {
  state: initialState,
  getters: {
    messages: state => {
      return state.messages;
    }
  },
  actions: {
    fetchMessages({ commit }, groupId) {
      messageService.fetchMessages(groupId).then(response => {
        commit("setMessages", response.data);
      });
    },
    sendMessage({ dispatch }, data) {
      messageService
        .sendMessage(data.text, data.time, data.groupId)
        .then(() => {
          dispatch("fetchMessages", data.groupId);
        });
    }
  },
  mutations: {
    setMessages(state, data) {
      state.messages = data;
    }
  }
};
