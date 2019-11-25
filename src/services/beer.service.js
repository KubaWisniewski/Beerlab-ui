import axios from "./axiosConfig";
import Vue from "vue";
const beerService = {
  fetchBeers,
  deleteBeer
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
export default beerService;
