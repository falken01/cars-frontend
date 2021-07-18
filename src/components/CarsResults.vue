<template>
  <div class="carsResults blue-grey lighten-5">
    <div v-for="car in carsDataSet" :key="car.id">
      <CarsCard
        :car-brand="car.brand"
        :car-model="car.modelName"
        :car-power="car.power"
        :car-type="car.modelType"
        :car-fuel="car.fuelType"
        :car-drive="car.carDrive"
        :car-color="car.color"
        :car-mileage="car.mileage"
        :car-price="car.pricePerDay"
      />
    </div>
  </div>
</template>

<script>
import CarsCard from "./CarsCard";
export default {
  name: "CarsResults",
  components: { CarsCard },
  props: ["carsDataSet"],
};
</script>

<style scoped>
  .carsResults {
    min-height: calc(100vh - 282px);
  }
</style>
