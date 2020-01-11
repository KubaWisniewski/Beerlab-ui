<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark class="ma-2" v-on="on"
        >Dodaj lub usuń użytkownika
      </v-btn>
    </template>
    <v-card class="elevation-12 orange lighten-5">
      <v-toolbar class="orange lighten-2">
        <v-toolbar-title>Dodaj lub usuń użytkownika</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="email"
                label="E-mail użytkownika*"
                name="email"
                required
                prepend-icon="mdi-account"
                type="email"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-col>
          <v-row>
            <v-btn
              color="error darken-1"
              class="ma-2"
              @click="deleteUserFromGroup"
              >Usuń użytkownika z grupy
            </v-btn>
            <v-btn color="success darken-1" class="ma-2" @click="addUserToGroup"
              >Dodaj użytkownika do grupy
            </v-btn>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import groupService from "../../services/group.service";

export default {
  data: () => ({
    dialog: false,
    email: ""
  }),
  props: {
    groupId: {
      type: Number
    }
  },
  methods: {
    addUserToGroup() {
      const { email, groupId } = this;
      if (email && groupId) {
        groupService.addUserToGroup(email, groupId);
        this.dialog = false;
      }
    },

    deleteUserFromGroup() {
      const { email, groupId } = this;
      if (email && groupId) {
        groupService.deleteUserFromGroup(email, groupId);
        this.dialog = "false";
      }
    }
  }
};
</script>
