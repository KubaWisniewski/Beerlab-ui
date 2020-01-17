<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/onas.jpeg"> </v-img>
      <v-card>
        <v-card 
          justify="center"
          align="center"
          class="elevation-12 orange lighten-2"
          max-width="600">
          <h1 class="text-center">Cześć!</h1>
          <h2 class="text-center">
            Jesteśmy nowoczesną, szybko rozwijającą się restauracją. Dzięki
            stronie oraz aplikacji mobilnej możesz sprawdzić, co aktualnie serwujemy
            bez wychodzenia z domu! Przyjdź do restauracji, załóż konto i ciesz się
            łatwościa składania zamówień.
          </h2>
          <br>
        </v-card>
        <v-card
          justify="center"
          align="center"
          class="elevation-12 orange lighten-3"
        >
          <h3>Tabela zawartości alkoholu w serwowanych piwach</h3>
          <v-simple-table class="elevation-12 orange lighten-4">
            <tbody>
              <tr>
                <td class="text-center">FUJAK</td>
                <td class="text-center">4.5%</td>
              </tr>
              <tr>
                <td class="text-center">STUDENT</td>
                <td class="text-center">4.5%</td>
              </tr>
              <tr>
                <td class="text-center">OJCIEC</td>
                <td class="text-center">5.5%</td>
              </tr>
              <tr>
                <td class="text-center">PANDA</td>
                <td class="text-center">5%</td>
              </tr>
              <tr>
                <td class="text-center">DZIEKAN</td>
                <td class="text-center">6.5%</td>
              </tr>
              <tr>
                <td class="text-center">HETMAN</td>
                <td class="text-center">7%</td>
              </tr>
              <tr>
                <td class="text-center">LUBA</td>
                <td class="text-center">6.5%</td>
              </tr>
              <tr>
                <td class="text-center">KOLARZ</td>
                <td class="text-center">8%</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-card>
    </v-row>
  </v-container>
</template>
