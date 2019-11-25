<template>
  <v-col cols="12">
    <v-row class="grey" justify="center" style="height: auto; ">
      <v-card outlined tile>
        <v-card class="mx-auto pt-1" max-width="600" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                <span class="white--text">SPRAWDZ ZAMOWIENIA</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="white--text">Edytuj statusy zamowien</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="blue"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <router-link to="/admin/orders">
              <v-btn text color="green">PRZJEDZ</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-card>
      <v-card outlined tile>
        <v-card class="mx-auto pt-1" max-width="600" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                <span class="white--text">EDYTUJ MENU</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="white--text">Dodawaj oraz usuwaj pozycje</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="blue"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <router-link to="admin/menu">
              <v-btn text color="green">PRZJEDZ</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-card>
      <v-card outlined tile>
        <v-card class="mx-auto pt-1" max-width="600" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                <span class="white--text">RAPORT</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="white--text">Sprawdź wygenerowany bilans</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="blue"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <router-link to="/">
              <v-btn text color="green">PRZJEDZ</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-card>
      <v-card outlined tile>
        <v-card class="mx-auto pt-1" max-width="600" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                <span class="white--text">SPRAWDZ UZYTKOWNIKÓW</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="white--text">Sprawdz użytkowników</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="blue"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <router-link to="/">
              <v-btn text color="green">PRZJEDZ</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "AdminView"
};
</script>
