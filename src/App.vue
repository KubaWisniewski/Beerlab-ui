<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped icon v-if="loggedIn">
      <v-list dense>
        <router-link to="/profile">
          <v-list-item @click="alert(123)">
              <v-list-item-action>
                <v-icon>mdi mdi-account-box</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title >
                  <span class="white--text">Profile</span>
                </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/menu">
        <v-list-item @click="alert(123)">
            <v-list-item-action>
              <v-icon>mdi-beer</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <span class="white--text">Beers</span>
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="/games">
        <v-list-item @click="alert(123)">
            <v-list-item-action>
              <v-icon>mdi-gamepad-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <span class="white--text">Games</span>
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="/ranking">
        <v-list-item @click="alert(123)">
            <v-list-item-action>
              <v-icon>mdi-chart-line</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <span class="white--text">Ranking</span>
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="/currency">
        <v-list-item @click="alert(123)">
            <v-list-item-action>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <span class="white--text">Currency</span>
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="/admin">
        <v-list-item @click="alert(123)">
            <v-list-item-content>
              <v-list-item-title>
                <span class="white--text">Add beers</span>
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="/test">
        <v-list-item @click="alert(123)">
            <v-list-item-content>
              <v-list-item-title>
                <span class="white--text">Test</span>
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <notifications group="auth" position="bottom right" />
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="loggedIn"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-toolbar-title class = "display-2 white--text" >Beerlab</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <template>
        <router-link to="/cart">   
        <v-btn icon v-if="loggedIn">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        </router-link>
        <v-btn icon v-if="loggedIn">
          <v-icon @click="logout">mdi-logout</v-icon>
        </v-btn>
        <v-btn icon v-else>
          <router-link to="/login">
            <v-icon large color="white">mdi-account-circle</v-icon>
          </router-link>
        </v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
    <v-row
        justify="center">
      <span>&copy; Wiśniewski Jakub, Jarmakowski Wojciech, Kozyra Aleksander, Belter Daniel, Babło Jędrzej</span>
      </v-row>
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
