<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item @click="alert(123)">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="alert(123)">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <notifications group="auth" position="bottom right" />
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-toolbar-title>Beerlab</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <template>
        <v-btn icon v-if="loggedIn">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        <v-btn icon v-if="loggedIn">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
        <v-btn icon v-if="loggedIn">
          <v-icon @click="logout">mdi-logout</v-icon>
        </v-btn>
        <v-btn icon v-else>
          <router-link to="/login">
            <v-icon>mdi-login</v-icon>
          </router-link>
        </v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { router } from "./router";
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    ...mapGetters({ loggedIn: "authentication/loggedIn" })
  },
  methods: {
    logout() {
      this.$store.dispatch("authentication/logout");
    },
    login() {
      router.push("/login");
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
