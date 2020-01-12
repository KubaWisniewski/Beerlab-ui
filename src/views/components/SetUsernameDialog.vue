<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark class="ma-2" v-on="on"
        >Zmień nazwę użytkownika
      </v-btn>
    </template>
    <v-card class="elevation-12 orange lighten-5">
      <v-toolbar class="orange lighten-2">
        <v-toolbar-title>Zmień nazwę użytkownika</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-text-field
            v-model="username"
            label="Nowa nazwa użytkownika*"
            name="username"
            required
            :rules="usernameRules"
            autofocus
            prepend-icon="mdi-account"
            type="text"
          ></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success darken-1" class="ma-2" @click="newUsername"
          >Zmień nazwę użytkonika
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SetUsernameDialog",
  data: () => ({
    dialog: false,
    username: "",
    usernameRules: [
      v => !!v || "Nazwa użytkownika jest wymagana",
      v => v.length >= 3 || "Minimum 3 znaki",
      v => /^\S+$/.test(v) || "Nazwa użytkownika nie może zawierać spacji"
    ]
  }),
  methods: {
    ...mapActions(["setUsername"]),
    newUsername() {
      this.setUsername(this.username);
      this.dialog = false;
    }
  }
};
</script>
