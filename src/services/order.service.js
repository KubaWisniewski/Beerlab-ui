import axios from "./axiosConfig";
import Vue from "vue";
const orderService = {
  fetchOrders,
  setOrderStatus,
  fetchCurrentOrders,
  fetchUserOrder
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

async function fetchUserOrder() {
  return await axios.get("/api/user/order").then(response => {
    return response;
  });
}

export default orderService;
