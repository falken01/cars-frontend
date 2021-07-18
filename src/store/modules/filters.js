import axiosService from "../../services/axiosService";

export const namespaced = true;

export const state = {
  brands: [],
  colors: [],
  fuelTypes: [],
  carDrives: [],
};

export const mutations = {
  GET_BRANDS(state, brands) {
    state.brands = brands;
  },
  GET_FUELS(state, fuels) {
    state.fuelTypes = fuels;
  },
  GET_CAR_DRIVES(store, carDrives) {
    state.carDrives = carDrives;
  },
  GET_COLORS(store, colors) {
    state.colors = colors;
  },
};

export const actions = {
  createBrandInput({ commit }) {
    return axiosService
      .getBrands()
      .then((response) => {
        const brands = response.data.map((brand) => {
          return brand.name;
        });
        commit("GET_BRANDS", brands);
      })
      .catch((error) => console.log(error));
  },
  createFuelInput({ commit }) {
    return axiosService
      .getFuelTypes()
      .then((response) => {
        const fuelTypes = response.data.map((fuelType) => {
          return fuelType.name;
        });
        commit("GET_FUELS", fuelTypes);
      })
      .catch((e) => console.log(e));
  },
  createCarDriveInput({ commit }) {
    return axiosService
      .getCarDrives()
      .then((response) => {
        const carDrives = response.data.map((carType) => {
          return carType.name;
        });
        commit("GET_CAR_DRIVES", carDrives);
      })
      .catch((e) => console.log(e));
  },
  createColorInput({ commit }) {
    return axiosService
      .getColors()
      .then((response) => {
        commit("GET_COLORS", response.data);
      })
      .catch((e) => console.log(e));
  },
};

export const getters = {};
