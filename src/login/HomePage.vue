<template>
<div>
  <v-card
    class="mx-auto background-color = grey lighten-1"
    max-width="1200"
    elevation = 0
  >
    <v-container fluid>
      <v-row dense>
          <v-card>
            <v-img
              class="white--text align-end"
              max-height="300px"
              src="@/assets/logo2.jpeg"
            >
            </v-img>
          </v-card>
      </v-row>
    </v-container>
  </v-card>
  <v-card
    class="mx-auto background-color = grey lighten-1"
    max-width="800"
    elevation = 0
  >
    <v-container fluid>
      <v-row dense>
          <v-card>
          <router-link to="/menu">
            <v-img
              class="white--text align-end"
              max-height="300px"
              src="@/assets/menu.png"
            >
            </v-img>
            </router-link>
          </v-card>
      </v-row>
    </v-container>
  </v-card>
  <v-card
    class="mx-auto background-color = grey lighten-1"
    max-width="800"
    elevation = 0
  >
    <v-container fluid>
      <v-row dense>
          <v-card>
          <router-link to="/">
            <v-img
              class="white--text align-end"
              max-height="300px"
              src="@/assets/onas.jpeg"
            >
            </v-img>
            </router-link>
          </v-card>
      </v-row>
    </v-container>
  </v-card>
  <v-card
    class="mx-auto background-color = grey lighten-1"
    max-width="800"
    elevation = 0
  >
    <v-container fluid>
      <v-row dense>
          <v-card>
          <router-link to="/">
            <v-img
              class="white--text align-end"
              max-height="300px"
              src="@/assets/kontakt.png"
            >
            </v-img>
            </router-link>
          </v-card>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "authentication/user",
      loggedIn: "authentication/loggedIn"
    })
  }
};
</script>

<style scoped>
</style>
