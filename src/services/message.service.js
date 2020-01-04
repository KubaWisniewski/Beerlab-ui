import axios from "./axiosConfig";
import Vue from "vue";
const messageService = {
  sendMessage,
  fetchMessages
};
async function fetchMessages(groupId) {
  return await axios
    .get("/api/message/" + groupId)
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać wiadomości dla danej grupy."
      });
    });
}
async function sendMessage(text, time, groupId) {
  return await axios
    .post("/api/message", {
      text: text,
      time: time,
      groupId: groupId
    })
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się wysłać wiadomości do grupy."
      });
    });
}
export default messageService;
