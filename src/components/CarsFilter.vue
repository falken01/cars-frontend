<template>
  <div class="CarsFilter teal lighten-4 d-flex flex-xl-wrap">
    <v-select
      class="mx-4 filters"
      :items="brandNames"
      label="Marka"
      :disabled="isDisabled"
    ></v-select>
    <v-select
      class="mx-4 filters"
      :items="colors"
      label="Kolor"
      :disabled="isDisabled"
    ></v-select>
    <v-select
      class="mx-4 filters"
      :items="carDrives"
      label="Napęd"
      :disabled="isDisabled"
    ></v-select>
    <v-select
      class="mx-4 filters"
      :items="fuelNames"
      label="Paliwo"
      :disabled="isDisabled"
    ></v-select>
    <v-btn color="primary"> Szukaj </v-btn>
  </div>
</template>

<script>
export default {
  name: "CarsFilter",
  props: ["brandNames", "fuelNames", "carDrives", "colors"],
  data() {
    return {
      isDisabled: false,
    };
  },
};
</script>

<style scoped>
.CarsFilter {
  padding: 60px 120px;
}
.filters {
  width: 22%;
}
</style>
