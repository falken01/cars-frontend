<template>
  <v-app>
    <CarsHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CarsHeader from "./components/CarsHeader";
export default {
  name: "App",
  components: { CarsHeader },
  data: () => ({
    //
  }),
};
</script>
