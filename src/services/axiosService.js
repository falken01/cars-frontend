import axios from "axios";
let API_CLIENT = axios.create({
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
  getFuelTypes() {
    return API_CLIENT.get("/fuel");
  },
  getCarDrives() {
    return API_CLIENT.get("/carDrives");
  },
  getCarsSet(page) {
    return API_CLIENT.get(`/cars/complex/${page}`);
  },
  getCars() {
    return API_CLIENT.get("/cars");
  },
  getColors() {
    return API_CLIENT.get("/cars/colors");
  },
  login(credentials) {
    API_CLIENT.withCredentials = true;
    return API_CLIENT.post("/api/AuthManagement/Login", credentials);
  },
  register(userDetails) {
    API_CLIENT.withCredentials = true;
    return API_CLIENT.post("/api/AuthManagement/Register", userDetails);
  },
  createRental(rental) {
    API_CLIENT.post("/carRentals", rental);
  },
};
