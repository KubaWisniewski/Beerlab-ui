<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/grupy.jpeg"></v-img>
    </v-row>
    <v-row justify="center">
      <v-col align="center" cols="12" sm="12" md="8" lg="6 ">
        <CreateNewGroupDialog @clicked="onCloseDialog"></CreateNewGroupDialog>
        <v-card
          v-for="(group, index) in groups"
          :key="index"
          class="ma-3 pt-1 elevation-5 orange lighten-5 fade"
          :to="'/messages/' + group.id"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                <span>{{ group.name }}</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span>{{ group.description }}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CreateNewGroupDialog from "./components/CreateNewGroupDialog";

export default {
  name: "GroupPage",
  data: () => ({}),
  computed: {
    ...mapGetters(["groups"])
  },
  methods: {
    ...mapActions(["fetchGroups"]),
    onCloseDialog() {
      this.fetchGroups();
    }
  },
  created() {
    this.fetchGroups();
  },
  components: { CreateNewGroupDialog }
};
</script>
