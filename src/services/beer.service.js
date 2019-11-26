import axios from "./axiosConfig";
import Vue from "vue";
const beerService = {
  fetchBeers,
  deleteBeer,
  addToCart
};

async function fetchBeers() {
  return await axios
    .get("/api/beer")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać menu."
      });
    });
}

async function deleteBeer(beerId) {
  return await axios
    .delete("/api/beer/" + beerId)
    .then(response => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "OK",
        text: "Udało się usunąć piwo."
      });
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się usunąć piwa."
      });
    });
}

async function addToCart(beerId, quantity) {
  return await axios
    .post("/api/order", {
      beerId: beerId,
      quantity: quantity
    })
    .then(() => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "OK",
        text: "Udało się dodać piwo do zamówienia."
      });
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się dodać piwa do koszyka."
      });
    });
}

export default beerService;
