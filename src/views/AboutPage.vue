<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/onas.jpeg"> </v-img>
      <v-card class="elevation-12 orange lighten-5 ma-5">
        <v-card
          justify="center"
          align="center"
          class="elevation-6 orange lighten-3 pa-5 ma-5 text-center"
          max-width="600"
        >
          <h1>Cześć!</h1>
          <h3>
            Jesteśmy nowoczesną, szybko rozwijającą się restauracją. Dzięki
            stronie oraz aplikacji mobilnej możesz sprawdzić, co aktualnie
            serwujemy bez wychodzenia z domu! Przyjdź do restauracji, załóż
            konto i ciesz się łatwościa składania zamówień.
          </h3>
        </v-card>
        <v-card
          justify="center"
          align="center"
          class="elevation-6 orange lighten-3 ma-5"
        >
          <h4 class="pa-4">Tabela zawartości alkoholu w serwowanych piwach</h4>
          <v-simple-table class="elevation-6 orange lighten-4 text-center">
            <tbody>
              <tr>
                <td>FUJAK</td>
                <td>4.5%</td>
              </tr>
              <tr>
                <td>STUDENT</td>
                <td>4.5%</td>
              </tr>
              <tr>
                <td>OJCIEC</td>
                <td>5.5%</td>
              </tr>
              <tr>
                <td>PANDA</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>DZIEKAN</td>
                <td>6.5%</td>
              </tr>
              <tr>
                <td>HETMAN</td>
                <td>7%</td>
              </tr>
              <tr>
                <td>LUBA</td>
                <td>6.5%</td>
              </tr>
              <tr>
                <td>KOLARZ</td>
                <td>8%</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-card>
    </v-row>
  </v-container>
</template>
