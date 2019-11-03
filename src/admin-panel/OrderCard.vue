
<template>
  <v-card>
    <v-card-title>Numer zamowienia: {{ order.id }}</v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="5">Piwa: {{ order }}</v-col>
        <v-col cols="5">
          Status:
          <span
            class="orange black--text"
            v-if="order.status == 'INPROGRESS'"
          >ZAMOWIENIE W TRAKCIE REALIZACJI</span>

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
const axios = require("axios");
export default {
  props: {
    order: {}
  },
  methods: {
    close() {
      axios
        .post("http://localhost:8081/api/order/" + this.order.id, {
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
        .post("http://localhost:8081/api/order/" + this.order.id, {
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
        .post("http://localhost:8081/api/order/" + this.order.id, {
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
        .post("http://localhost:8081/api/order/" + this.order.id, {
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

<style>
</style>