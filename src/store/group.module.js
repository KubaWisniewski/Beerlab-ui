import groupService from "../services/group.service";

const initialState = {
  groups: []
};

export const groups = {
  state: initialState,
  getters: {
    groups: state => {
      return state.groups;
    }
  },
  actions: {
    fetchGroups({ commit }) {
      groupService.fetchGroups().then(response => {
        commit("setGroups", response.data);
      });
    }
  },
  mutations: {
    setGroups(state, data) {
      state.groups = data;
    }
  }
};
