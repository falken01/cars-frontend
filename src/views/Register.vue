<template>
  <div class="registerForm flex">
    <v-row class="d-flex">
      <v-text-field
        v-model="name"
        label="Imię"
        :rules="rules"
        hide-details="auto"
        class="ma-4"
      ></v-text-field>
      <v-text-field
        v-model="surname"
        label="Naziwsko"
        :rules="rules"
        hide-details="auto"
        class="ma-4"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field
        v-model="email"
        label="E-mail"
        :rules="rules"
        hide-details="auto"
        class="ma-4"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        :rules="rules"
        hide-details="auto"
        class="ma-4"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field
        v-model="password2"
        label="Powtórz hasło"
        type="password"
        :rules="rules"
        hide-details="auto"
        class="ma-4"
      ></v-text-field>
    </v-row>
    <v-row>
      <cars-date-picker class="ma-4" v-model="birthday" />
    </v-row>
    <v-row>
      <v-btn depressed color="success" class="mr-4" @click="applyRegistration" large>
        Zatwierdź dane
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import CarsDatePicker from "../components/CarsDatePicker";
import axiosService from "../services/axiosService";
export default {
  name: "Register",
  components: { CarsDatePicker },
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
    birthday: "",
  }),
  methods: {
    collectData() {
      if (this.password === this.password2 && this.rules) {
        return {
          name: this.name,
          surname: this.surname,
          dateOfBirth: this.birthday,
          position: "user",
          email: this.email,
          password: this.password,
        };
      }
    },
    applyRegistration() {
      axiosService.register(this.collectData()).then((res)=>console.log(res))
    }
  },
};
</script>

<style lang="scss" scoped>
.registerForm {
  padding: 50px 600px;
}
</style>
