<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      icon
      absolute
      temporary
      v-if="loggedIn"
      class="orange lighten-4 elevation-4"
    >
      <v-list dense>
        <v-list-item to="/profile">
          <v-list-item-action>
            <v-icon> mdi-account-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Profil
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu">
          <v-list-item-action>
            <v-icon>mdi-beer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Menu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/games">
          <v-list-item-action>
            <v-icon>mdi-gamepad-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Quiz
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/ranking">
          <v-list-item-action>
            <v-icon>mdi-chart-line</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Ranking
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/currency">
          <v-list-item-action>
            <v-icon>mdi-cash-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Kup kufle!
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <notifications group="auth" position="bottom right"></notifications>
    <v-app-bar app class="orange lighten-1 elevation-4">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="loggedIn"
      ></v-app-bar-nav-icon>
      <v-btn v-else icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <h1>Beerlab <v-icon large>mdi-beer</v-icon></h1>
      <v-spacer></v-spacer>
      <v-btn icon v-if="loggedIn" to="/cart">
        <v-badge
                color="green"
                overlap
        >
          <template v-slot:badge>
            <span v-if="order['orderItemsDto'].length > 0">{{ order.orderItemsDto.length }}</span>
          </template>
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon v-if="loggedIn">
        <v-icon @click="logout">mdi-logout</v-icon>
      </v-btn>
      <v-btn icon v-else to="/login">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters( {loggedIn:"loggedIn", order: "userActualOrder", })
  },
  methods: {
    ...mapActions(["logout","fetchUserActualOrder"])
  },
  created() {
    this.fetchUserActualOrder();
  },
};
</script>
