<template>
  <v-footer class = "background-color = black darken-3" app>
    <v-row justify="center">
     <div class="text-center">
        <v-icon>mdi-copyright</v-icon>
        <router-link to="/">
        <v-btn text color="white">Strona główna</v-btn>
        </router-link>
        <v-btn text  color="white">Kontakt</v-btn>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
</style>