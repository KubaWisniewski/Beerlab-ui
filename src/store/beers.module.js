import beerService from "../services/beer.service";

const initialState = {
  beers: []
};

export const beers = {
  state: initialState,
  getters: {
    beers: state => {
      return state.beers;
    }
  },
  actions: {
    fetchBeers({ commit }) {
      beerService.fetchBeers().then(response => {
        commit("setBeers", response.data);
      });
    },
    deleteBeer({ dispatch }, data) {
      beerService.deleteBeer(data).then(() => {
        dispatch("fetchBeers");
      });
    },
    addToCart({ dispatch }, data) {
      beerService
        .addToCart(data.beerId, data.quantity)
        .then(() => dispatch("fetchBeers"));
    }
  },
  mutations: {
    setBeers(state, data) {
      state.beers = data;
    }
  }
};
