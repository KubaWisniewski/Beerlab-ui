<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/profil.jpeg">
      </v-img>
    </v-row>
    <v-col class="pa-0">
      <v-card class="mb-2 text-center elevation-12 orange lighten-5">
        <v-card-text v-if="user != null">
          <v-avatar class="mx-auto" size="150">
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            />
          </v-avatar>

          <h4 class="mx-auto">Witaj: {{ user.username }}</h4>
          Stan konta : {{ user.balance }} Kufli.
        </v-card-text>
        <v-card-actions
          ><v-spacer></v-spacer>
          <SetUsernameDialog></SetUsernameDialog>
          <SetPasswordDialog></SetPasswordDialog>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-data-table
        :headers="headers"
        :items="userOrders"
        class=" elevation-12 orange lighten-5"
      >
        <template v-slot:item.completeTime="props">
          <div v-if="props.item.completeTime == null">
            Zamówienie nie zostało jeszcze zakończone.
          </div>
          <div v-else>{{ props.item.completeTime | formatDate }}</div>
        </template>
        <template v-slot:item.startedTime="props">
          {{ props.item.startedTime | formatDate }}
        </template>
        <template v-slot:item.status="props">
          <div v-if="props.item.status === 'QUEUED'">
            OCZEKUJE NA REALIZACJE
          </div>
              <div v-if="props.item.status === 'INPROGRESS'">
            W TRAKCIE REALIZACJI
          </div>
          <div v-if="props.item.status === 'COMPLETED'">
            ZAMÓWIENIE ZREALIZWOANE
          </div>
           <div v-if="props.item.status === 'CLOSED'">
            ZAMÓWIENIE ZAKOŃCZONE
          </div>
          <div v-if="props.item.status === 'NOT_PAID'">
            ZAMÓWIENIE NIEOPŁACONE
          </div>
        </template>
        <template v-slot:item.totalPrice="props">
          {{ props.item.totalPrice }}
          <v-icon small>mdi-beer</v-icon>
        </template>
        <template v-slot:top>
          <v-toolbar class="orange lighten-2">
            <v-toolbar-title>Historia zamówień</v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SetUsernameDialog from "./components/SetUsernameDialog";
import SetPasswordDialog from "./components/SetPasswordDialog";
export default {
  data: () => ({
    headers: [
      {
        text: "Numer zamówienia",
        align: "left",
        sortable: false,
        value: "id"
      },
      { text: "Data rozpoczęcia", value: "startedTime" },
      { text: "Data zakończenia", value: "completeTime" },
      { text: "Status", value: "status" },
      { text: "Cena końcowa", value: "totalPrice" }
    ]
  }),
  computed: {
    ...mapGetters(["loggedIn", "user", "userOrders"])
  },
  methods: {
    ...mapActions(["fetchUserOrders", "fetchUserData"])
  },
  created() {
    this.fetchUserOrders();
    this.fetchUserData();
  },
  components: {
    SetUsernameDialog,
    SetPasswordDialog
  }
};
</script>
