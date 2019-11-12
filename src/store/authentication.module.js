/* eslint-disable no-unused-vars */
import { userService } from "../services/user.service.js";
import { router } from "../router.js";
const initialState = {
  status: {
    loggedIn: false
  },
  token: null,
  user: null
};

export const authentication = {
  namespaced: true,
  state: initialState,
  getters: {
    loggedIn: state => {
      return state.status.loggedIn;
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
      userService.login(email, password).then(
        response => {
          // eslint-disable-next-line no-console
          console.log(response.headers);
          let token = response.headers["x-auth-token"];
          localStorage.setItem(
            "user",
            JSON.stringify(response.data["rolesDto"])
          );
          let user = response.data["username"];
          commit("loginSuccess", {
            token,
            user
          });
          router.push("/");
        },
        error => {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      );
    },
    register({ commit }, { username, email, password, setGender, date }) {
      userService.register(username, email, password, setGender, date).then(
        () => {
          router.push("/login");
        },
        error => {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      );
    },
    logout({ commit }) {
      localStorage.removeItem("x-auth-token");
      userService.logout().then(
        () => {
          commit("logoutSuccess");
          router.push("/login");
        },
        error => {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, { token, user }) {
      state.status = {
        loggedIn: true
      };
      state.token = token;
      state.user = user;
    },
    logoutSuccess(state) {
      state.status = {
        loggedIn: false
      };
      state.token = null;
      state.user = null;
    }
  }
};
