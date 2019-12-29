<template>
  <v-col align="center">
    <v-card to="/admin/orders" class="ma-3 pt-1 elevation-5 orange lighten-5 fade" width="50%">
      <v-list-item three-line>
        <v-list-item-avatar size="80" color="orange"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>SPRAWDZ ZAMOWIENIA</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Edytuj statusy zamowien</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card to="/admin/menu" class="ma-3 pt-1 elevation-5 orange lighten-5 fade" width="50%">
      <v-list-item three-line>
        <v-list-item-avatar size="80" color="orange"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>EDYTUJ MENU</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Dodawaj oraz usuwaj pozycje</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card
      to="/admin/orders/current"
      class="ma-3 pt-1 elevation-5 orange lighten-5 fade"
      width="50%"
    >
      <v-list-item three-line>
        <v-list-item-avatar size="80" color="orange"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>OCZEKUJACE ZAMOWIENIA</span>
          </v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card to="/admin/raport" class="ma-3 pt-1 elevation-5 orange lighten-5 fade" width="50%">
      <v-list-item three-line>
        <v-list-item-avatar size="80" color="orange"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>RAPORT</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Sprawdź wygenerowany bilans</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

      <v-card to="/admin/quiz" class="ma-3 pt-1 elevation-5 orange lighten-5 fade" width="50%">
      <v-list-item three-line>
        <v-list-item-avatar size="80" color="orange"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>ZARZADZAJ QUIZAMI</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Dodawaj i edytuj quizy</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    
    <v-card to="/" class="ma-3 pt-1 elevation-5 orange lighten-5 fade" width="50%">
      <v-list-item three-line>
        <v-list-item-avatar size="80" color="orange"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span>SPRAWDZ UZYTKOWNIKÓW</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span>Sprawdz użytkowników</span>
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
