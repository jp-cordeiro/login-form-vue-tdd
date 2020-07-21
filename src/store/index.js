import Vue from 'vue';
import Vuex from 'vuex';

import AuthStore from '../features/auth/store/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthStore,
  },
});
