<template>
  <div>
    <CarsFilter/>
    <ModelPreview />
    <CarsModelCard/>
  </div>
</template>

<script>


import CarsFilter from "../components/CarsFilter";
import CarsModelCard from "../components/CarsModelCard";
import ModelPreview from "../components/ModelPreview";
export default {
  name: "Cars",

  components: {
    CarsFilter,
    ModelPreview,
    CarsModelCard

  },
};
</script>