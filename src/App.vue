<template>
  <v-app id="inspire">
    <Navbar></Navbar>
    <v-content class = "background-color = grey lighten-1">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./Footer";
import Navbar from "./Navbar";

export default {
  components: {
    Footer,
    Navbar
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
