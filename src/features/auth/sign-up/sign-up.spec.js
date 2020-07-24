import Vue from 'vue';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

import { shallowMount } from '@vue/test-utils';
import AppStore from '@/store/index';
import SignUp from './Sign-up';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Vuelidate);

describe('SignUp', () => {
  let wrapper;

  const $store = AppStore;

  beforeEach(() => {
    wrapper = shallowMount(SignUp, {
      mocks: {
        $store,
      },
    });
  });

  test('should SignUp is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });
});
