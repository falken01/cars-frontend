import axios from "axios";
const API_CLIENT = axios.create({
  baseURL: `https://localhost:5001`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  getBrands() {
    return API_CLIENT.get("/brands");
  },
  getModels() {
    return API_CLIENT.get("/models");
  },
  getCars() {
    return API_CLIENT.get("/cars");
  },
  getModel(id) {
    return API_CLIENT.get("/models/" + id)
  }
};
