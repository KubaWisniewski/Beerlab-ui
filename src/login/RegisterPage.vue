<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="grey darken-1" dark flat>
            <v-toolbar-title>Rejestracja</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                label="Nick"
                :rules="usernameRules"
                name="username"
                prepend-icon="mdi-account"
                type="text"
                autofocus
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="password"
                id="password"
                label="Hasło"
                :rules="passwordRules"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="passwordConfirmation"
                id="passwordConfirmation"
                label="Password confirmation"
                name="passwordConfirmation"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
              <v-select
                :items="genders"
                v-model="setGender"
                no-data-text="Brak danych"
                label="Wybierz plec"
              ></v-select>
              <template>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
                :close-on-content-click="false"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date" label="Wybierz date urodzenia" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker
                        ref="picker"
                        v-model="date"
                        scrollable
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">Anuluj</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              </template>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="grey darken-1" @click="register">Załóż konto</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    date: null,
    menu: false,
    modal: false,
    genders: ["Mezczyzna", "Kobieta", "Inna"],
    username: "",
    email: "",
    setGender: "",
    password: "",
    passwordConfirmation: "",
    usernameRules: [
      v => !!v || "Login jest wymagany",
      v => v.length >= 3 || "Minimum 3 znaki",
      v => /^\S+$/.test(v) || "Login nie może zawierać spacji"
    ],
    passwordRules: [
      v => !!v || "Hasło jest wymagane",
      v => v.length >= 4 || "Minimum 4 znaki",
      v => /^\S+$/.test(v) || "Hasło nie może zawierać spacji"
    ],
    birthDayRules: [v => v > 2020 || "Musisz mieć ukończone 18 lat"]
  }),
  watch: {
    modal (value) {
      value && this.$nextTick(() => this.$refs.picker.activePicker = 'YEAR')
    }
  },
  methods: {
    register() {
      const {username, email, password, setGender, date} = this;
      if (username && email && setGender && password && date) {
        this.$store.dispatch("authentication/register", {
          username,
          email,
          password,
          setGender,
          date
        });
      }
    },
    save(date) {
      this.$refs.dialog.save(date)
    },
  }
};
</script>
