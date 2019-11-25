<template>
  <v-card>
    <v-card-title>Numer zamowienia: {{ order.id }}</v-card-title>
    <v-card-text>
      Piwa:
      <v-row>
        <v-row :key="index" v-for="(beer, index) in order.orderItemsDto">
          <li>{{beer.beerDto.brand}} - {{beer.beerDto.description}} - Ilość: {{beer.quantity}}</li>
        </v-row>
        Wartośc zamówienia: {{order.totalPrice}}
        <v-col cols="5">
          Status:
          <span
            class="orange black--text"
            v-if="order.status == 'INPROGRESS'"
          >ZAMOWIENIE W TRAKCIE REALIZACJI</span>
          <span class="orange black--text" v-if="order.status == 'NOT_PAID'">ZAMOWIENIE NIE OPLACONE</span>
          <span class="orange black--text" v-if="order.status == 'PAID'">ZAMOWIENIE OPLACONE</span>
          <span
            class="green black--text"
            v-if="order.status == 'COMPLETED'"
          >ZAMOWIENIE ZAKOŃCZONE I OCZEKUJE NA KLIENTA</span>
          <span
            class="black white--text"
            v-if="order.status == 'CLOSED'"
          >REALIZACJA ZAMOWIENIA ZAMKNIETA</span>
          <span class="white black--text" v-if="order.status == 'QUEUED'">ZAMOWIENIE W KOLEJCE</span>
        </v-col>
      </v-row>
      <v-btn v-on:click="close">ZAKONCZ</v-btn>
      <v-btn v-on:click="addQueue">DODAJ DO KOLEJKI</v-btn>
      <v-btn v-on:click="complete">ZREALIZUJ</v-btn>
      <v-btn v-on:click="inprogress">DODAJ DO REALIZACJI</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "../services/axiosConfig";
export default {
  props: {
    order: {}
  },
  methods: {
    close() {
      axios
        .post("/api/order/" + this.order.id, {
          OrderStatus: "CLOSED"
        })
        .then(() => {
          this.$root.$emit("changedStatus");
          this.$notify({
            group: "auth",
            type: "success",
            title: "OK",
            text: "Zmieniono status zamowienia"
          });
        });
    },
    addQueue() {
      axios
        .post("/api/order/" + this.order.id, {
          OrderStatus: "QUEUED"
        })
        .then(() => {
          this.$root.$emit("changedStatus");
          this.$notify({
            group: "auth",
            type: "success",
            title: "OK",
            text: "Zmieniono status zamowienia"
          });
        });
    },
    complete() {
      axios
        .post("/api/order/" + this.order.id, {
          OrderStatus: "COMPLETED"
        })
        .then(() => {
          this.$root.$emit("changedStatus");
          this.$notify({
            group: "auth",
            type: "success",
            title: "OK",
            text: "Zmieniono status zamowienia"
          });
        });
    },
    inprogress() {
      axios
        .post("/api/order/" + this.order.id, {
          OrderStatus: "INPROGRESS"
        })
        .then(() => {
          this.$root.$emit("changedStatus");
          this.$notify({
            group: "auth",
            type: "success",
            title: "OK",
            text: "Zmieniono status zamowienia"
          });
        });
    }
  }
};
</script>
