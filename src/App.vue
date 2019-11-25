<template>
  <v-app>
    <Navbar></Navbar>
    <v-content class="orange lighten-4">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/Footer";
import Navbar from "@/Navbar";

export default {
  components: {
    Footer,
    Navbar
  }
};
</script>
