<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center">
      <v-img width="100%" max-height="300px" src="@/assets/kontakt.png">
      </v-img>
      <v-card class="elevation-12 orange lighten-5 ma-5">
        <v-card
          justify="center"
          align="center"
          class="elevation-6 orange lighten-3 ma-5"
        >
          <h1>Godziny otwarcia:</h1>
          <v-simple-table class="text-center orange lighten-4">
            <tbody>
              <tr>
                <td>Poniedziałek - Czwartek</td>
                <td>18:00 - 00:00</td>
              </tr>
              <tr>
                <td>Piątek</td>
                <td>16:00 - 04:00</td>
              </tr>
              <tr>
                <td>Sobota</td>
                <td>15:00 - 02:00</td>
              </tr>
              <tr>
                <td>Niedziela</td>
                <td>Zamknięte</td>
              </tr>
            </tbody>
          </v-simple-table>
          <h3 class="ma-2">Adres: ul. Brzegi 55, 80-045 Gdańsk</h3>
          <h4 class="ma-2">Telefon: 956 980 808</h4>
        </v-card>
        <iframe
          class="ma-5 elevation-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.4398868171165!2d18.63247049723349!3d54.33153284270461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73eb4c52b003%3A0x2d26b2439c65b0ee!2sPolsko-Japo%C5%84ska%20Akademia%20Technik%20Komputerowych!5e0!3m2!1spl!2spl!4v1579273514332!5m2!1spl!2spl"
          width="800"
          height="600"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactPage"
};
</script>
