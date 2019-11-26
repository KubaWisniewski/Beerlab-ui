<template>
  <v-footer color="orange lighten-1" class="elevation-4">
    <v-row justify="center" align="center">
      <div class="ma-1">{{ new Date().getFullYear() }}</div>
      <v-icon>mdi-copyright</v-icon>
      <v-btn text ripple to="/" class="pa-2 ma-2">Strona główna</v-btn>
      <v-btn text ripple to="/contact" class="pa-2 ma-2">Kontakt</v-btn>
      <v-btn text ripple to="/about" class="pa-2 ma-2">O nas</v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
