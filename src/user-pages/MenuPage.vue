<template>
  <v-container class="fill-height text-center justify-center">
    <div align-center>
      <BeerPage></BeerPage>
    </div>
  </v-container>
</template>
<script>
import BeerPage from "./beer/BeerPage";
export default {
  components: {
    BeerPage
  }
};
</script>
