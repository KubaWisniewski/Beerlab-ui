<template>
  <v-card
    min-width="80%"
    class="text-center elevation-12 orange lighten-5  justify-center"
  >
    <v-toolbar class="grey lighten-2 black--text mb-4">
      <v-spacer></v-spacer>
      <v-toolbar-title>Numer zamowienia: {{ order.id }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card
      class="text-center justify-center grey lighten-2 pa-2 ma-auto elevation-6 black--text"
      max-width="80%"
    >
      <v-row class="justify-center font-weight-black ">
        <ul>
          <li
            :key="index"
            v-for="(beer, index) in order.orderItemsDto"
            class="pa-2"
          >
            {{ beer.beerDto.brand }} - Ilość: {{ beer.quantity }}
          </li>
        </ul>
      </v-row>
      <v-divider></v-divider>
      <v-row class="justify-center font-weight-black pa-2">
        Wartośc zamówienia: {{ order.totalPrice }} Kufli
      </v-row>
    </v-card>
    <v-card-text>
      <v-toolbar
        v-if="order.status === 'INPROGRESS'"
        class="yellow lighten-2 black--text ma-3"
      >
        <v-spacer></v-spacer>
        <v-toolbar-title v-if="order.status === 'INPROGRESS'"
          >ZAMOWIENIE W TRAKCIE REALIZACJI</v-toolbar-title
        >
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar
        v-if="order.status === 'NOT_PAID'"
        class="red lighten-2 black--text ma-3"
        ><v-spacer></v-spacer>
        <v-toolbar-title>ZAMOWIENIE NIE OPLACONE</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar
        class="orange lighten-2 black--text ma-3"
        v-if="order.status === 'PAID'"
      >
        <v-spacer></v-spacer>
        <v-toolbar-title>ZAMOWIENIE OPLACONE</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar
        class="green lighten-2 black--text ma-3"
        v-if="order.status === 'COMPLETED'"
      >
        <v-spacer></v-spacer>
        <v-toolbar-title
          >ZAMOWIENIE ZAKOŃCZONE I OCZEKUJE NA KLIENTA</v-toolbar-title
        >
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar
        class="grey lighten-2 black--text ma-3"
        v-if="order.status === 'CLOSED'"
      >
        <v-spacer></v-spacer>
        <v-toolbar-title>REALIZACJA ZAMOWIENIA ZAMKNIETA</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar
        class="blue lighten-2 black--text ma-3"
        v-if="order.status === 'QUEUED'"
      >
        <v-spacer></v-spacer>
        <v-toolbar-title>ZAMOWIENIE W KOLEJCE</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
        class="grey lighten-2"
        v-on:click="setOrderStatus({ orderId: order.id, status: 'CLOSED' })"
        >ZAKONCZ</v-btn
      >
      <v-btn
        class="green lighten-2 "
        v-on:click="setOrderStatus({ orderId: order.id, status: 'COMPLETED' })"
        >ZREALIZUJ</v-btn
      >
      <v-btn
        class="yellow lighten-2"
        v-on:click="setOrderStatus({ orderId: order.id, status: 'INPROGRESS' })"
        >DODAJ DO REALIZACJI</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    order: {}
  },
  methods: {
    ...mapActions(["setOrderStatus"])
  }
};
</script>
