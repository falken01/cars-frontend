<template>
  <div class="CarsFilter teal lighten-4 d-flex">
    <v-select class="mx-4" :items="this.items" label="Marka"></v-select>
    <v-select class="mx-4" :items="['Foo', 'Bar']" label="Model"></v-select>
    <v-select class="mx-4" :items="['Foo', 'Bar']" label="Napęd"></v-select>
    <v-select class="mx-4" :items="['Foo', 'Bar']" label="Paliwo"></v-select>
  </div>
</template>

<script>
import axiosService from "../services/axiosService";
export default {
  name: "CarsFilter",
  data() {
    return {
      items: [],
    };
  },
  created() {
    axiosService
      .getBrands()
      .then((p) => {
        console.log(p);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
.CarsFilter {
  padding: 60px 120px;
}
</style>
