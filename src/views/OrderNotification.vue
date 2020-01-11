<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-badge color="black" overlap>
            <template v-slot:badge>
              <span
                v-if="
                  userCompletedOrders !== undefined &&
                    userCompletedOrders.length > 0
                "
                >{{ userCompletedOrders.length }}</span
              >
            </template>
            <v-icon>mdi-beer</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item
            v-for="(order, index) in userCompletedOrders"
            :key="index"
          >
            <v-list-item-avatar>
              <v-icon>mdi-beer</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >Twoje zamówienie {{ order.id }} jest gotowe!</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="menu = false">Zamknij</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "OrderNotification",
  data: () => ({
    fav: true,
    menu: false,
    polling: null
  }),
  methods: {
    ...mapActions(["fetchUserCompletedOrders"]),
    pollData() {
      this.polling = setInterval(() => this.fetchUserCompletedOrders(), 3000);
    }
  },
  computed: {
    ...mapGetters(["userCompletedOrders"])
  },
  created() {
    this.fetchUserCompletedOrders();
    this.pollData();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  }
};
</script>
