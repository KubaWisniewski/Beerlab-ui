<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/waluta.jpeg">
      </v-img>
    </v-row>
    <v-row>
      <v-col class="fill-height flex-column d-flex ">
        <v-row class="headline justify-center ma-5">
          Waluta
        </v-row>
        <v-spacer></v-spacer>
        <v-row justify="center" align="center">
          <v-card
            width="400px"
            height="400px"
            class="ma-2 d-flex flex-column elevation-12 orange lighten-5 fade"
          >
            <v-card-title class="orange lighten-2 elevation-5 justify-center">
              Pakiet 10 kufli
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="headline  text-center">5 $</v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center ">
              <PayPal
                :button-syle="myStyle"
                amount="5.00"
                currency="USD"
                :client="credentials"
                env="sandbox"
                @payment-completed="payment_completed_cb"
              ></PayPal>
            </v-card-actions>
          </v-card>
          <v-card
            width="400px"
            height="400px"
            class="ma-2 d-flex flex-column elevation-12 orange lighten-5 fade"
          >
            <v-card-title class="orange lighten-2 elevation-5 justify-center">
              Pakiet 20 kufli
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="headline  text-center">10 $</v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center ">
              <PayPal
                :button-syle="myStyle"
                amount="10.00"
                currency="USD"
                :client="credentials"
                env="sandbox"
                @payment-completed="payment_completed_cb"
              ></PayPal>
            </v-card-actions>
          </v-card>
          <v-card
            width="400px"
            height="400px"
            class="ma-2 d-flex flex-column elevation-12 orange lighten-5 fade"
          >
            <v-card-title class="orange lighten-2 elevation-5 justify-center ">
              Pakiet 90 kufli
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="headline  text-center">45 $</v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center ">
              <PayPal
                :button-syle="myStyle"
                amount="45.00"
                currency="USD"
                :client="credentials"
                env="sandbox"
                @payment-completed="payment_completed_cb"
              ></PayPal>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PayPal from "vue-paypal-checkout";
import axios from "../services/axiosConfig";
export default {
  name: "CurrencyPage",
  data: () => ({
    myStyle: {
      label: "checkout",
      size: "large",
      shape: "pill",
      color: "blue"
    },
    credentials: {
      sandbox:
        "Ad-TjNjR-HEt4TQ9IwnYGjJuWjZaSC89KwTIjvVHfS0A9s5aLIiRQfOwErxOn5vNAhWkfRUIEuGkcqYh"
    },
    paidFor: false,
    payment_completed: {
      payment_completed_cb() {}
    }
  }),
  methods: {
    async payment_completed_cb(res) {
      const order = await res;
      await this.sendPaymentInformation(order);
    },

    sendPaymentInformation(order) {
      axios.post("/api/user/addMoney", order).then(() => {
        this.$notify({
          group: "auth",
          type: "success",
          title: "OK",
          text: "Pomyślnie dodano środki do konta."
        });
      });
    }
  },
  components: {
    PayPal
  }
};
</script>
<style scoped>
.fade {
  transition: opacity 2s unset;
}
.fade:hover {
  opacity: 0.5;
  background-color: saddlebrown;
}
</style>
