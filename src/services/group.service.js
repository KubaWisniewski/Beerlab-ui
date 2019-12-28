import axios from "./axiosConfig";
import Vue from "vue";
const groupService = {
  createGroup,
  fetchGroups,
  addUserToGroup,
  deleteUserFromGroup
};
async function fetchGroups() {
  return await axios
    .get("/api/group")
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się pobrać grup."
      });
    });
}
async function createGroup(name, description) {
  return await axios
    .post("/api/group", {
      name: name,
      description: description
    })
    .then(response => {
      return response;
    })
    .catch(() => {
      Vue.notify({
        group: "auth",
        type: "error",
        title: "Błąd",
        text: "Nie udało się stworzyć grupy."
      });
    });
}

async function addUserToGroup(email, groupId) {
  return await axios
    .post("/api/group/addUser", {
      email: email,
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
        text: "Nie udało się dodać użytkownika do grupy."
      });
    });
}

async function deleteUserFromGroup(email, groupId) {
  return await axios
    .post("/api/group/deleteUser", {
      email: email,
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
        text: "Nie udało się usunąć użytkownika z grupy."
      });
    });
}
export default groupService;
