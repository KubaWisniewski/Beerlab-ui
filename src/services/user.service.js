import Vue from "vue";
/* eslint-disable no-console */
const axios = require("axios");

export const userService = {
  register,
  login,
  logout
};

function login(email, password) {
  return axios
    .post(
      "http://localhost:8081/api/auth/signin",
      JSON.stringify({
        email,
        password
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(
      response => {
        Vue.notify({
          group: "auth",
          type: "success",
          title: "OK",
          text: "Zalogowano pomyslnie"
        });
        if (response.data["accessToken"]) {
          localStorage.setItem(
            "token",
            JSON.stringify(response.data["accessToken"])
          );
        }
        return response;
      },
      error => {
        Vue.notify({
          group: "auth",
          type: "error",
          title: "Bład",
          text:
            "Nie udało sie zalogować upewnij się, że podałeś prawidłowe dane."
        });
      }
    );
}

function register(username, email, password) {
  return axios
    .post(
      "http://localhost:8081/api/auth/signup",
      JSON.stringify({
        username,
        email,
        password
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
}

function logout() {
  return axios
    .post("http://localhost:8081/logout", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(
      response => {
        localStorage.removeItem("token");
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
}
