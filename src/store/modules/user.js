import axiosService from "../../services/axiosService";

export const namespaced = true;

export const state = {
  id: 0,
  name: "",
  surname: "",
  mail: "",
  position: "",
  jwt: "",
  islogged: false,
};

export const mutations = {
  CREATE_USER(state, userDetails) {
    state.id = userDetails.id;
    state.name = userDetails.name;
    state.surname = userDetails.surname;
    state.mail = userDetails.email;
    state.position = userDetails.position;
    state.islogged = true;
  },
  LOGOUT(state) {
    state.id = 0;
    state.name = "";
    state.surname = "";
    state.mail = "";
    state.position = "";
    state.islogged = false;
  },
  SET_TOKEN(state, jwt) {
    state.jwt = jwt;
  },
};

export const actions = {
  signIn({ commit, dispatch }, credentials) {
    return axiosService
      .login(credentials)
      .then((response) => {
        const userDetails = response.data.user.value;
        commit("CREATE_USER", userDetails);
        const jwt = response.data.token;
        dispatch("jwtProcessing", jwt);
      })
      .catch((e) => console.log(e));
  },
  jwtProcessing({ commit }, jwt) {
    commit("SET_TOKEN", jwt);
    localStorage.setItem("jwtToken", jwt);
  },
  logout_process({ commit }) {
    commit("LOGOUT");
  },
};

export const getters = {};
