import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: '01-ОБ/2022',
        number: '159-F',
        type: 'Pickup',
        creationDate: '2022-07-15T10:21:35.315271',
      },
      {
        id: '02-ОБ/2022',
        number: 'a-35',
        type: 'Delivery',
        creationDate: '2022-07-25T15:37:45.084291',
      },
      {
        id: '03-ОБ/2022',
        number: 'B-411',
        type: 'Pick-point',
        creationDate: '2022-08-01T09:11:26.264541',
      },
      {
        id: '04-ОБ/2022',
        number: '35-Ad',
        type: 'Pickup',
        creationDate: '2022-08-01T21:41:19.353652',
      },
      {
        id: '05-ОБ/2022',
        number: 'Ah-510',
        type: 'Pick-point',
        creationDate: '2022-08-12T18:01:51.526705',
      },
    ],
  },
  getters: {
    GET_PRODUCTS: (state) => state.products,
  },
  mutations: {},
  actions: {},
  modules: {},
});
