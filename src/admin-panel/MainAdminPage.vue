<template>
  <v-col align="center">
    <v-card
      to="/orders"
      class="ma-3 pt-1 elevation-5 orange lighten-5 fade"
      width="50%"
    >
      <v-list-item three-line>
        <v-list-item-avatar
          size="80"
          color="orange lighten-2"
          class="elevation-10"
        >
          <v-icon large> mdi-clipboard-check</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>Sprawdź zamówienia</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Edytuj statusy zamówień</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card
      to="/admin/menu"
      class="ma-3 pt-1 elevation-5 orange lighten-5 fade"
      width="50%"
    >
      <v-list-item three-line>
        <v-list-item-avatar
          size="80"
          color="orange lighten-2"
          class="elevation-10"
        >
          <v-icon large> mdi-beer</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>Edytuj menu</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Dodawaj oraz usuwaj pozycje</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card
      to="/admin/raport"
      class="ma-3 pt-1 elevation-5 orange lighten-5 fade"
      width="50%"
    >
      <v-list-item three-line>
        <v-list-item-avatar
          size="80"
          color="orange lighten-2"
          class="elevation-10"
        >
          <v-icon large> mdi-chart-areaspline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>Raporty</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Sprawdź wygenerowany bilans</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card
      to="/admin/quiz"
      class="ma-3 pt-1 elevation-5 orange lighten-5 fade"
      width="50%"
    >
      <v-list-item three-line>
        <v-list-item-avatar
          size="80"
          color="orange lighten-2"
          class="elevation-10"
        >
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

    <v-card
      to="/admin/create"
      class="ma-3 pt-1 elevation-5  orange lighten-5 fade"
      width="50%"
    >
      <v-list-item three-line>
        <v-list-item-avatar
          size="80"
          color="orange lighten-2"
          class="elevation-10"
          ><v-icon large>mdi-account-multiple</v-icon></v-list-item-avatar
        >
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>Sprawdź użytkowników i pracowników</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Stwórz konto dla pracownika</span>
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
