<template>
  <v-card class="elevation-12 orange lighten-2">
    <v-card-title class="justify-center black--text"
      ><h4>{{ quiz.name }}</h4></v-card-title
    >
    <v-divider></v-divider>
    <v-list dense class="elevation-12 orange lighten-5">
      <v-list-item>
        <v-list-item-content class="align-center">
          <v-img height="200px" width="600" :src="quiz.imgUrl" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="justify-start align-start"
          ><h4 class="font-weight-bold">Opis:</h4>
          {{ quiz.description }}</v-list-item-content
        >
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content class="justify-start"
          ><h4 class="font-weight-bold">Start:</h4>
          {{ quiz.startDate }}</v-list-item-content
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="justify-start"
          ><h4 class="font-weight-bold">Koniec:</h4>
          {{ quiz.endDate }}</v-list-item-content
        >
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content class="justify-center"> </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  props: {
    quiz: {}
  }
};
</script>
