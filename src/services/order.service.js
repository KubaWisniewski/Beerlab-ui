import axios from "./axiosConfig";
import Vue from "vue";
const orderService = {
  fetchOrders,
  setOrderStatus,
  fetchCurrentOrders,
  fetchUserOrder,
  deleteItemFromOrder,
  reduceQuantity,
  confirmOrder,
  fetchCompletedOrders
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

async function fetchCompletedOrders() {
  return await axios
    .get("/api/user/completedOrders")
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

async function deleteItemFromOrder(orderId, beerId) {
  return await axios
    .delete(`/api/order/${orderId}/delete/${beerId}`)
    .then(() => {
      Vue.notify({
        group: "auth",
        type: "danger",
        title: "UWAGA",
        text: "Usunięto pomyślnie"
      });
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

async function reduceQuantity(orderId, beerId, quantity) {
  return await axios
    .post(`/api/order/reduce/${orderId}`, {
      beerId: beerId,
      quantity: quantity
    })
    .then(() => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "OK",
        text: "Zmniejszono pomyślnie"
      });
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Coś poszło nie tak :/"
      });
    });
}

async function confirmOrder(method) {
  return await axios
    .post("/api/user/confirm/" + method)
    .then(() => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "OK",
        text: "Zamowienie zlozone pomyślnie"
      });
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text:
          "Nie udało się złożyć zamówienia(Jeśli nie masz wystarczająco środków, dokup je na swoim profilu)"
      });
    });
}

async function fetchUserOrder() {
  return await axios.get("/api/user/order").then(response => {
    return response;
  });
}

export default orderService;
