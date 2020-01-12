<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark class="ma-2" v-on="on">Zmień hasło</v-btn>
    </template>
    <v-card class="elevation-12 orange lighten-5">
      <v-toolbar class="orange lighten-2">
        <v-toolbar-title>Zmień hasło</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-text-field
            v-model="password"
            label="Nowe hasło*"
            name="password"
            required
            :rules="passwordRules"
            autofocus
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success darken-1" class="ma-2" @click="newPassword"
          >Zmień hasło
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SetPasswordDialog",
  data: () => ({
    dialog: false,
    password: "",
    passwordRules: [
      v => !!v || "Hasło jest wymagane",
      v => v.length >= 4 || "Minimum 4 znaki",
      v => /^\S+$/.test(v) || "Hasło nie może zawierać spacji"
    ]
  }),
  methods: {
    ...mapActions(["setPassword"]),
    newPassword() {
      this.setPassword(this.password);
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
