<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="grey darken-1" dark flat>
            <v-toolbar-title>Logowanie</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                autofocus
              ></v-text-field>

              <v-text-field
                v-model="password"
                id="password"
                label="Hasło"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
          <router-link to="/register">
          <v-btn text small color="primary">Nie posiadasz konta? Załóż teraz!</v-btn>
          </router-link>
            <div class="flex-grow-1"></div>
            <v-btn color="grey darken-1" @click="login">Zaloguj</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      if (email && password) {
        this.$store.dispatch("authentication/login", { email, password });
      }
    }
  }
};
</script>
