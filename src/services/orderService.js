import axios from "./axiosConfig";
import Vue from "vue";
const orderService = {
  fetchOrders
};

async function fetchOrders() {
  axios
    .get("/api/order")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać zamówień."
      });
    });
}
export default orderService;
