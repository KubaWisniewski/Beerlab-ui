import axios from "./axiosConfig";
import Vue from "vue";
const orderService = {
  fetchOrders,
  setOrderStatus,
  fetchCurrentOrders
};

async function fetchOrders() {
  return await axios
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

async function fetchCurrentOrders() {
  return await axios
    .get("/api/order/current")
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

async function setOrderStatus(orderId, status) {
  return await axios
    .post(`/api/order/${orderId}`, {
      OrderStatus: status
    })
    .then(() => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "OK",
        text: "Zmieniono status zamowienia"
      });
    });
}

export default orderService;
