<template>
<v-card
    class="mx-auto"
    max-width="344"
    id="model-preview"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        Model Name
      </p>
    </v-card-text>
    <v-card-text>
      <v-chip-group
        column
      >
        <v-chip>Power</v-chip>

        <v-chip>Type</v-chip>

        <v-chip>Pojemność</v-chip>

        <v-chip>Benzyna</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      
    </v-card-actions>
  </v-card>
</template>

<script>
import axiosService from "../services/axiosService";
export default {
  name: "ModelPreview",
  data() {
    return {
      items: [],
    };
  },
  created() {
    axiosService
      
  },
};
</script>

<style>
#model-preview {
    width: 700px;
}
</style>