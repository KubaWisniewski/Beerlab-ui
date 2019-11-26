<template>
  <v-container class="fill-height text-center justify-center">
    <div align-center>
      <v-row :key="index" v-for="( orderItem , index) in order.orderItemsDto">
        <v-card>
        <v-card-title>{{ orderItem.beerDto.brand }}</v-card-title>
        <v-card-text>
          Opis: {{ orderItem.beerDto.description }}
          <v-img class="white--text" height="200px" width="600" :src="orderItem.beerDto.imgUrl" />
        </v-card-text>

          <v-card-text class="headline text-left text-left font-weight-bold large"> Sztuk: {{ orderItem.quantity }} </v-card-text>

          <v-card-text class="headline text-right font-weight-bold large">Cena: {{ orderItem.beerDto.price }} <v-icon large>mdi-beer</v-icon> </v-card-text>


        <v-card-actions class="justify-end">
          <v-btn @click="removeFromCart" rounded color = "red" dark>Usuń</v-btn>
        </v-card-actions>




        </v-card>


      </v-row>

      <v-card>
        <v-card-title class="align-center"> Podsumowanie </v-card-title>
        <v-card-text class="align-content-start">
          Suma: {{ order.totalPrice }}
        </v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn @click="commitOrder" rounded color = "green" dark>Potwierdz zamowienie</v-btn>
                </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import BeerCard from "./beer/BeerCard";
const axios = require("axios");
export default {
  components: {
    BeerCard
  },
  name: "CartPage",
    data() {
      return {
         order: {},
         beerTotal: {},
         orderItemsDto: []
    };
  },

methods: {

  removeFromCart(){

  },

  commitOrder(){
      axios.post(`http://localhost:8081/api/order/` + this.order.id, {

                OrderStatus: "INPROGRESS"

               },
              {
                headers: {
                  "X-Auth-Token": localStorage.getItem("token").replace(/"/g, "")
                }
              });
  },

  fetchData() {
    axios.get("http://localhost:8081/api/user/order", {
      headers: {
        "X-Auth-Token": localStorage.getItem("token").replace(/"/g, "")
      }
    }).then(response => {
      this.order = response.data;
   });
  }
},
  created() {
    this.fetchData();
    }
};

</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
