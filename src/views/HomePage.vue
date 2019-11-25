<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-card >
        <router-link to="/">

        <v-img class="white--text" max-height="500px" src="@/assets/logo2.jpeg">
        </v-img>
        </router-link>
      </v-card>
    </v-row>
    <v-row class="fade">
      <v-card ripple>
        <router-link to="/menu">
          <v-img max-height="500px" src="@/assets/menu.png"> </v-img>
        </router-link>
      </v-card>
    </v-row>
    <v-row class="fade">
      <v-card ripple>
        <router-link to="/about">
          <v-img max-height="500px" src="@/assets/onas.jpeg"> </v-img>
        </router-link>
      </v-card>
    </v-row>
    <v-row class="fade">
      <v-card ripple>
        <router-link to="/contact">
          <v-img max-height="500px" src="@/assets/kontakt.png"> </v-img>
        </router-link>
      </v-card>
    </v-row>
  </v-container>
</template>
<style scoped>
.fade {
  transition: opacity 1s ease-in-out;
}
.fade:hover {
  opacity: 0.8;
}
</style>
