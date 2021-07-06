<template>
<div class=card-container>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    v-for="item in items"
    v-bind:key="item.id"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://storage.carsmile.pl/uploads/2020/04/carsmile_skoda_superb_kombi_2020_photo_01.jpg"
    ></v-img>

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 text-subtitle-1">
        220zł/dzień
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        column
      >
        <v-chip>Mileage</v-chip>

        <v-chip>Color</v-chip>

        <v-chip>ProductionDate</v-chip>

        <v-chip>PricePerDay</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
import axiosService from "../services/axiosService";

export default {
  name: "CarsModelCard",
  data() {
    return {
      items: [
        { id: 1, title: 'item1' },
        { id: 2, title: 'item2' },
        { id: 3, title: 'item3' },
        { id: 4, title: 'item4' },
        { id: 5, title: 'item5' },
        { id: 6, title: 'item6' },
        { id: 7, title: 'item7' },
        { id: 8, title: 'item8' },
        { id: 9, title: 'item9' },
        { id: 10, title: 'item10' }
      ],
    };
  },
  created() {
    axiosService
      .getModels()
      .then((p) => {
        console.log(p);

      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-flow: row wrap;
  padding: 40px;
}
</style>