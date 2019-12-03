import Vue from "vue";
import axios from "./axiosConfig";

const userService = {
  register,
  login,
  logout,
  fetchUserData,
  registerNewWorker,
  fetchUserOrders,
  fetchWorkers
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

async function fetchUserOrders() {
  return await axios
    .get("/api/user/orders")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Bład",
        text: "Nie udało sie pobrać informacji o zamówieniach użytkownika. "
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

async function registerNewWorker(username, email, password, role) {
  return await axios
    .post("/api/admin/create", {
      username: username,
      email: email,
      password: password,
      role: role
    })
    .then(response => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "OK",
        text: "Utworzono nowe konto dla pracownika."
      });

      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Bład",
        text: "Nie udało sie zarejestrować nowego pracownika."
      });
    });
}

async function fetchWorkers() {
  return await axios
    .get("/api/admin/workers")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Bład",
        text: "Nie udało sie pobrać informacji o pracownikach. "
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
