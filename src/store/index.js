import Vue from "vue";
import Vuex from "vuex";
import * as filters from "@/store/modules/filters.js";
import * as user from "@/store/modules/user.js";
import * as cars from "@/store/modules/cars.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    filters,
    user,
    cars,
  },
});
