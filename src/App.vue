<template>
  <v-app>
    <CarsHeader @openLoginForm="openLoginForm" />
    <CarsLoginForm :dialog="loginForm" @hideLoginForm="hideLoginForm" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CarsHeader from "./components/CarsHeader";
import CarsLoginForm from "./components/CarsLoginForm";
export default {
  name: "App",
  components: { CarsLoginForm, CarsHeader },
  data: () => ({
    loginForm: false,
  }),
  methods: {
    openLoginForm() {
      this.loginForm = true;
    },
    hideLoginForm() {
      this.loginForm = false;
    }
  },
};
</script>
