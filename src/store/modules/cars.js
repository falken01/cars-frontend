import axiosService from "../../services/axiosService";

export const namespaced = true;

export const state = {
  cars: [],
  carBrands: [],
};
export const mutations = {
  ALL_CARS(state, cars) {
    state.cars = cars;
  },
};

export const actions = {
  getAllCars({ commit }, page) {
    return axiosService
      .getCarsSet(page - 1)
      .then((response) => {
        console.log(response.data);
        commit("ALL_CARS", response.data);
      })
      .catch((error) => console.log(error));
  },
  createCarRental(carRental) {
    return axiosService
      .createRental(carRental)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

export const getters = {};
