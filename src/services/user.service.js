import Vue from "vue";
import axios from "./axiosConfig";

const userService = {
  register,
  login,
  logout,
  fetchUserData
};

async function login(data) {
  return await axios
    .post("/api/auth/signin", { email: data.email, password: data.password })
    .then(response => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "OK",
        text: "Zalogowano pomyślnie."
      });
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Bład",
        text: "Nie udało sie zalogować upewnij się, że podałeś prawidłowe dane."
      });
    });
}

async function fetchUserData() {
  return await axios
    .get("/api/user/me")
    .then(response => {
      return response.data;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Bład",
        text: "Nie udało sie pobrać informacji o użytkowniku. "
      });
    });
}

async function register(username, email, password, gender, dateOfBirth) {
  return await axios
    .post("/api/auth/signup", {
      username: username,
      email: email,
      password: password,
      gender: gender,
      dateOfBirth: dateOfBirth
    })
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Bład",
        text: "Nie udało sie zarejestrować."
      });
    });
}

async function logout() {
  return await axios
    .post("/logout")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Bład",
        text: "Nie udało sie wylogować."
      });
    });
}

export default userService;
