import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    sortBy: 'default',
    searchByIndex: '',
    type: '',
  },
  getters: {
    GET_PRODUCTS: (state) => state.products,
    GET_SORTBY: (state) => state.sortBy,
    GET_SEARCHBYINDEX: (state) => state.searchByIndex,
    GET_TYPE: (state) => state.type,
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_SORTBY(state, payload) {
      state.sortBy = payload;
    },
    SET_SEARCHBYINDEX(state, payload) {
      state.searchByIndex = payload;
    },
    SET_TYPE(state, payload) {
      state.type = payload;
    },
  },
  actions: {},
  modules: {},
});
