<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark class="ma-2" v-on="on"
        >Stwórz nową grupę
      </v-btn>
    </template>
    <v-card class="elevation-12 orange lighten-5">
      <v-toolbar class="orange lighten-2">
        <v-toolbar-title>Stwórz nową grupę</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-form>
                <v-text-field
                  v-model="name"
                  label="Nazwa grupy*"
                  name="name"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                ></v-text-field>
                <v-textarea
                  class="pa-2"
                  v-model="description"
                  label="Opis grupy*"
                  rows="3"
                  clearable
                  hide-details
                  required
                ></v-textarea>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
        <small>Pola oznaczone '*' są wymagane</small>
      </v-card-text>
      <v-card-actions>
        <v-col>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn color="success darken-1" class="ma-2" @click="createNewGroup"
              >Stwórz grupę
            </v-btn>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    name: "",
    description: ""
  }),
  methods: {
    ...mapActions(["createGroup"]),
    createNewGroup() {
      this.createGroup({ name: this.name, description: this.description });
      this.dialog = false;
    }
  }
};
</script>
