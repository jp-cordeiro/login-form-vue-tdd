export default {
  state: {
    navigation: '',
  },
  mutations: {
    SET_NAVIGATION(state, navigation) {
      state.navigation = navigation;
    },
  },
  actions: {
    setNavigation({ commit }, navigation) {
      commit('SET_NAVIGATION', navigation);
    },
  },
  getters: {
    getNavigation(state) {
      return state.navigation;
    },
  },
};
