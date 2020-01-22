<template>
  <v-col align="center">
    <v-card
      to="/admin/quiz"
      class="ma-3 pt-1 elevation-5 orange lighten-5 fade"
    >
      <v-list-item three-line>
        <v-list-item-avatar color="orange lighten-2" class="elevation-10">
          <v-icon large> mdi-google-controller</v-icon></v-list-item-avatar
        >
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>Zarządaj quizami</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Dodawaj i edytuj quizy</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "AdminView"
};
</script>
<style scoped>
.fade:hover {
  opacity: 0.5;
}
</style>
