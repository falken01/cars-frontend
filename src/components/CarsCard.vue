<template>
  <div class="carsCard">
    <v-card elevation="2" outlined>
      <v-row>
        <v-col class="col-2">
          <v-img
            height="180px"
            width="auto"
            :src="require(`@/assets/${carModel}.jpg`)"
          ></v-img>
        </v-col>
        <v-col class="col-8">
          <v-card-title>{{ carBrand }}</v-card-title>
          <v-card-subtitle>{{ carModel }}</v-card-subtitle>
          <v-card-text
            >{{ carType }} • {{ carPower }} KM • {{ carFuel }} •
            {{ carDrive }} • {{ carColor }}</v-card-text
          >
          <v-card-text> Przebieg {{ carMileage }} km </v-card-text>
        </v-col>
        <v-col class="buttons col-2 align-self-center" v-if="islogged">
          <span class="price">{{ carPrice }} PLN /24H</span> <br />
          <v-btn class="my-2" depressed color="success"> Wypożycz </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CarsCard",
  props: [
    "car-brand",
    "car-model",
    "car-type",
    "car-fuel",
    "car-drive",
    "car-power",
    "car-color",
    "car-mileage",
    "car-price",
  ],
  computed: {
    ...mapState("user", ["islogged"]),
  },
};
</script>

<style scoped>
.carsCard {
  padding: 20px 150px;
}
.price {
  font-weight: bold;
  color: black;
}
</style>
