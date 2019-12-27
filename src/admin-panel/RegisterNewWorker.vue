<template>
  <v-dialog v-model="dialog" max-width="600px" cols="12" sm="8" md="4">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark class="ma-2" v-on="on">Dodaj pracownik</v-btn>
    </template>
    <v-card class="elevation-12 orange lighten-5">
      <v-toolbar class="orange lighten-2">
        <v-spacer></v-spacer>
        <v-toolbar-title>Stwórz konto dla pracownika</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-container fluid class="fill-height">
          <v-row justify="center">
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  label="Nazwa użytkownika"
                  :rules="usernameRules"
                  name="username"
                  prepend-icon="mdi-account"
                  type="text"
                  autofocus
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  name="email"
                  prepend-icon="mdi-account"
                  type="email"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Hasło"
                  :rules="passwordRules"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="passwordConfirmation"
                  label="Powtórz hasło"
                  name="passwordConfirmation"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
                <v-select
                  :items="roles"
                  v-model="role"
                  no-data-text="Brak danych"
                  label="Wybierz role"
                ></v-select>
              </v-form>
            </v-card-text>
          </v-row>
        </v-container>
        <small>Pola oznaczone '*' są wymagane</small>
      </v-card-text>
      <v-card-actions>
        <v-col>
          <v-row>
            <v-btn color="error darken-1" @click="dialog = false"
              >Zamknij</v-btn
            >
            <v-spacer></v-spacer>

            <v-btn color="success darken-1" @click="registerNewWorker"
              >Załóż konto</v-btn
            >
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import userService from "../services/user.service";

export default {
  data: () => ({
    dialog: false,
    username: "",
    roles: ["ROLE_BARMAN", "ROLE_ADMIN"],
    role: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    usernameRules: [
      v => !!v || "Nazwa użytkownika jest wymagana",
      v => v.length >= 3 || "Minimum 3 znaki",
      v => /^\S+$/.test(v) || "Nazwa użytkownika nie może zawierać spacji"
    ],
    passwordRules: [
      v => !!v || "Hasło jest wymagane",
      v => v.length >= 4 || "Minimum 4 znaki",
      v => /^\S+$/.test(v) || "Hasło nie może zawierać spacji"
    ]
  }),
  methods: {
    registerNewWorker() {
      const { username, email, password, role } = this;
      if (username && email && role && password) {
        userService.registerNewWorker(username, email, password, role);
      }
    }
  }
};
</script>
