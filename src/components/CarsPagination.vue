<template>
  <div class="text-center blue-grey lighten-5">
    <v-pagination
      v-model="page"
      :length="carsLength"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @input="$emit('pushPage', page)"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "CarsPagination",
  props: ["carsDataSetLength"],
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    carsLength() {
      return Math.ceil(this.carsDataSetLength / 5);
    },
  },
};
</script>

<style scoped>

</style>
