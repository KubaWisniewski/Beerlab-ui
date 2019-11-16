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
        </v-card-text>
        Stan konta : {{user.balance}} Kufli.
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Pakiet</div>
              <v-list-item-title class="headline mb-1">10 kufli</v-list-item-title>
              <v-list-item-subtitle>5 $</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="justify-center">
            <PayPal
              amount="5.00"
              currency="USD"
              :client="credentials"
              env="sandbox"
              @payment-completed="payment_completed_cb"
            ></PayPal>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Pakiet</div>
              <v-list-item-title class="headline mb-1">20 kufli</v-list-item-title>
              <v-list-item-subtitle>10 $</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="justify-center">
            <PayPal
              amount="10.00"
              currency="USD"
              :client="credentials"
              env="sandbox"
              @payment-completed="payment_completed_cb"
            ></PayPal>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Pakiet</div>
              <v-list-item-title class="headline mb-1">90 kufli</v-list-item-title>
              <v-list-item-subtitle>45 $</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="justify-center">
            <PayPal
              amount="45.00"
              currency="USD"
              :client="credentials"
              env="sandbox"
              @payment-completed="payment_completed_cb"
            ></PayPal>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
const axios = require("axios");
import PayPal from "vue-paypal-checkout";
export default {
  components: {
    PayPal
  },
  data() {
    return {
      credentials: {
        sandbox:
          "Ad-TjNjR-HEt4TQ9IwnYGjJuWjZaSC89KwTIjvVHfS0A9s5aLIiRQfOwErxOn5vNAhWkfRUIEuGkcqYh"
      },
      user: Object,
      paidFor: false,
      payment_completed: {
        payment_completed_cb() {}
      }
    };
  },
  methods: {
    async payment_completed_cb(res) {
      const order = await res;
      await this.sendPaymentInformation(order);
    },

    fetchUserInfo() {
      axios.get("http://localhost:8081/api/user/me").then(response => {
        this.user = response.data;
      });
    },

    sendPaymentInformation(order) {
      axios.post("http://localhost:8081/api/user/addMoney", order).then(() => {
        this.$notify({
          group: "auth",
          type: "success",
          title: "OK",
          text: "Pomyślnie dodano środki do konta."
        });
        this.fetchUserInfo();
      });
    }
  },
  created() {
    this.fetchUserInfo();
  }
};
</script>