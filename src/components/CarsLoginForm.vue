<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Zaloguj się</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="E-mail"
                v-model="email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Hasło"
                type="password"
                v-model="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('hideLoginForm')">
          Zamknij
        </v-btn>
        <v-btn color="blue darken-1" text @click="$emit('hideLoginForm')" v-on:click="$emit('login',collectData)">
          Zaloguj
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CarsLoginForm",
  props: ["dialog"],
  data: () => ({
    email: "",
    password: "",
  }),
  computed: {
    collectData() {
      return {
        email: this.email,
        password: this.password
      };
    },
  },
};
</script>

<style scoped></style>
