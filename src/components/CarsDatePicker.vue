<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    min-width="auto"

  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Data urodzenia"
        readonly
        v-bind="attrs"
        v-on="on"
        class="datePicker"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  component: "CarsDatePicker",
  data: () => ({
    menu: false,
    modal: false,
    menu2: false,
    date:""
  }),
};
</script>

<style scoped>
.datePicker {
  margin: 4px;
}
</style>
