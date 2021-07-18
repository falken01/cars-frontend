<template>
  <div>
    <v-overlay v-if="isVisible">
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        height="50"
        width="50"
      />
    </v-overlay>
    <CarsFilter
      :brand-names="brands"
      :fuel-names="fuelTypes"
      :car-drives="carDrives"
      :colors="colors"
    />
    <CarsResults :carsDataSet="cars" />
    <CarsPagination :carsDataSetLength="this.numberOfAvailableCars" @pushPage="getCarsDataSet" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import CarsFilter from "../components/CarsFilter";
import CarsResults from "../components/CarsResults";
import CarsPagination from "../components/CarsPagination";
import axiosService from "../services/axiosService";
export default {
  name: "Home",
  components: {
    CarsPagination,
    CarsResults,
    CarsFilter,
  },
  computed: {
    ...mapActions("cars", ["getAllModels", "getAllCars"]),
    ...mapState("cars", ["cars", "carBrands"]),
    ...mapState("filters", ["brands", "fuelTypes", "carDrives", "colors"]),
    ...mapActions("filters", [
      "createBrandInput",
      "createFuelInput",
      "createCarDriveInput",
      "createColorInput",
    ]),
  },
  data() {
    return {
      isVisible: true,
      numberOfAvailableCars: 0,
    };
  },
  created() {
    axiosService.getCars().then((res) => {
      this.numberOfAvailableCars = res.data.length;
    });
    this.$store.dispatch("filters/createBrandInput");
    this.$store.dispatch("filters/createFuelInput");
    this.$store.dispatch("filters/createCarDriveInput");
    this.$store.dispatch("filters/createColorInput");
    this.getCarsDataSet();
  },
  methods: {
    getCarsDataSet(page = 1) {
      this.isVisible = true;
      this.$store
        .dispatch("cars/getAllCars", page)
        .then((res) => {
          console.log(res);
          this.isVisible = false;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
