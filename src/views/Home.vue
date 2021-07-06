<template>
  <div>
    <CarsFilter/>
    <CarsCard/>
  </div>
</template>

<script>


import CarsFilter from "../components/CarsFilter";
import CarsCard from "../components/CarsCard";
export default {
  name: "Home",

  components: {
    CarsFilter,
    CarsCard

  },
};
</script>
