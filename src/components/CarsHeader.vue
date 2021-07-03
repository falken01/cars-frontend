<template>
  <div>
    <v-app-bar color="dark accent-4" dense dark justify-sm-space-between>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Wypożyczalnia supersamochodów</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" class="mr-4" @click="$emit('openLoginForm')"> Zaloguj </v-btn>
      <v-btn depressed color="primary" class="mr-4"> Zarejestruj </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "CarsHeader",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped></style>
