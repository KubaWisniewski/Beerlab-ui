<template>
  <v-row justify="center">
    <v-col align="center" cols="12" sm="12" md="8" lg="6 ">
      <AddUserToGroupDialog :groupId="groupId"></AddUserToGroupDialog>
      <v-card
        v-for="(message, index) in messages"
        :key="index"
        class="ma-3 elevation-5 orange lighten-5 fade"
      >
        <v-toolbar height="30px" class="orange lighten-2">
          Użytkownik {{ message.userEmail }} napisał:
          <v-spacer></v-spacer>
          {{ message.time | formatDate }}
        </v-toolbar>
        <v-card-text>
          <p>{{ message.text }}</p>
        </v-card-text>
      </v-card>
      <v-card class="ma-3 pt-1 elevation-5 orange lighten-5 fade">
        <v-textarea
          class="pa-2"
          v-model="text"
          auto-grow
          filled
          label="Nowa wiadomość"
          rows="1"
          clearable
          hide-details
          required
        ></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="
              sendMessage({
                text: text,
                time: time,
                groupId: Number.parseFloat(groupId)
              })
            "
            >Wyślij</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddUserToGroupDialog from "./components/AddUserToGroupDialog";

export default {
  name: "MessagePage",
  data() {
    return {
      text: "",
      time: new Date(),
      groupId: this.$route.params.groupId
    };
  },
  computed: {
    ...mapGetters(["messages"])
  },
  methods: {
    ...mapActions(["fetchMessages", "sendMessage"])
  },
  mounted() {
    this.fetchMessages(this.$route.params.groupId);
  },
  components: {
    AddUserToGroupDialog
  }
};
</script>
