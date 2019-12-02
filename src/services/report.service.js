import Vue from "vue";
import axios from "./axiosConfig";

const reportService = {
  getRealizationTime
};

async function getRealizationTime() {
  return await axios
    .get("/api/statistic/realizationOrderTime")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać czasu realizacji zamówienia."
      });
    });
}
export default reportService;
