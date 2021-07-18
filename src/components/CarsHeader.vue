<template>
  <div>
    <v-app-bar color="dark accent-4" dense dark justify-sm-space-between>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link :to="{ name: 'Home' }">
        <v-toolbar-title>Wypożyczalnia supersamochodów</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="!islogged">
        <v-btn
          depressed
          color="primary"
          class="mr-4"
          @click="$emit('openLoginForm')"
        >
          Zaloguj
        </v-btn>
        <router-link :to="{ name: 'Register' }">
          <v-btn depressed color="primary" class="mr-4"> Zarejestruj </v-btn>
        </router-link>
      </div>
      <div v-else>
        <v-btn
          depressed
          color="warning"
          class="mr-4"
          @click="$emit('logout')"
        >
          Wyloguj
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "CarsHeader",
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapState("user", ["islogged"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
a:visited {
  color: white;
}
</style>
