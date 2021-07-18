<template>
  <v-app>
    <v-overlay v-if="isVisible">
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        height="50"
        width="50"
      />
    </v-overlay>
    <CarsHeader @openLoginForm="openLoginForm" @logout="logout" />
    <CarsLoginForm
      :dialog="loginForm"
      @hideLoginForm="hideLoginForm"
      @login="loginMethod"
    />
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
    isVisible: false,
  }),
  methods: {
    loginMethod(loginPayload) {
      this.isVisible = true;
      this.$store
        .dispatch("user/signIn", loginPayload)
        .then(() => {
          this.isVisible = false;
        })
        .catch((e) => console.log(e));
    },
    openLoginForm() {
      this.loginForm = true;
    },
    hideLoginForm() {
      this.loginForm = false;
    },
    logout() {
      localStorage.removeItem("jwtToken");
      this.$store.dispatch("user/logout_process");
    },
  },
};
</script>
