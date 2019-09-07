<template>
  <v-container class="fill-height text-center justify-center">
    <div align-center>
      <p style="font-size: 20px">
        Welcom in Beerlab <span v-if="loggedIn">{{ user["username"] }}</span>
      </p>
      <v-img
        class="white--text"
        max-height="300px"
        max-width="300px"
        src="@/assets/BeerLogo.png"
      />
    </div>
  </v-container>
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

<style scoped></style>
