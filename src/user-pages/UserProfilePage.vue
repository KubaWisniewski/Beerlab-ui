<template>
  <v-container class="fill-height text-center justify-center">
    <div align-center>
      <p style="font-size: 20px"></p>
      <div v-if="this.user != null">
        <v-avatar slot="offset" class="mx-auto d-block" size="130">
          <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg" />
        </v-avatar>
        <v-card-text class="text-xs-center">
          <h4 class="card-title font-weight-light">{{user.username}}</h4>
          <p
            class="card-description font-weight-light"
          >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
        </v-card-text>
      </div>
    </div>
  </v-container>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    fetchUserInfo() {
      var token = JSON.parse(localStorage.getItem("user"));
      axios({
        headers: { "X-Auth-Token": token }
      })
        .get("localhost:8081/api/user/me")
        .then(response => {
          this.user = response.data;
        });
    }
  },
  created() {
    this.fetchUserInfo;
  }
};
</script>