/* eslint-disable no-unused-vars */
import userService from "../services/user.service.js";
import router from "../router.js";
import axios from "../services/axiosConfig";
const initialState = {
  token: localStorage.getItem("token"),
  loggedIn: !!localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user"))
};

export const authentication = {
  state: initialState,
  getters: {
    loggedIn: state => {
      return state.loggedIn;
    },
    user: state => {
      return state.user;
    },
    token: state => {
      return state.token;
    }
  },
  actions: {
    login({ commit }, { email, password }) {
      userService.login({ email, password }).then(response => {
        let data = {
          token: response.headers["x-auth-token"],
          user: response.data
        };
        if (data.token) {
          axios.defaults.headers = {
            "x-auth-token": data.token
          };
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        commit("loginSuccess", data);
        if (data.user.rolesDto.map(y => y["roleName"]).includes("ROLE_USER"))
          router.push("/");
        else if (
          data.user.rolesDto.map(y => y["roleName"]).includes("ROLE_ADMIN")
        )
          router.push("/admin");
      });
    },
    register({ commit }, { username, email, password, setGender, date }) {
      userService
        .register(username, email, password, setGender, date)
        .then(() => {
          router.push("/login");
        });
    },
    logout({ commit }) {
      userService.logout().then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        commit("logoutSuccess");
        router.push("/login");
      });
    },
    fetchUserData({ commit }) {
      userService.fetchUserData().then(response => {
        localStorage.setItem("user", JSON.stringify(response.data));
        commit("setUserData", response.data);
      });
    }
  },
  mutations: {
    loginSuccess(state, { token, user }) {
      state.loggedIn = true;
      state.token = token;
      state.user = user;
    },
    setUserData(state, data) {
      state.user = data;
    },
    logoutSuccess(state) {
      state.loggedIn = false;
      state.token = null;
      state.user = null;
    }
  }
};
