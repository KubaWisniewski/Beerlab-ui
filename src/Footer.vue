<template>
  <v-footer color="orange lighten-1" class="elevation-4">
    <v-row justify="center" align="center">
      <div class="ma-1">{{ new Date().getFullYear() }}</div>
      <v-icon>mdi-copyright</v-icon>
      <v-btn text ripple to="/" class="pa-2 ma-2">Strona główna</v-btn>
      <v-btn text ripple class="pa-2 ma-2">Kontakt</v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
