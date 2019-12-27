<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="9" lg="5">
        <v-card class="elevation-12 orange lighten-5">
          <v-toolbar class="orange lighten-2">
            <v-spacer></v-spacer>
            <v-toolbar-title>Logowanie</v-toolbar-title>
            <v-spacer></v-spacer>
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
                label="Hasło"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-col>
              <v-row>
                <v-btn text small to="/register"
                  >Nie posiadasz konta? Załóż teraz!
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="login">Zaloguj</v-btn>
              </v-row>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    login() {
      const { email, password } = this;
      if (email && password) {
        this.$store.dispatch("login", { email, password });
      }
    }
  }
};
</script>
