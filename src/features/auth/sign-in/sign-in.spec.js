import { shallowMount, mount } from '@vue/test-utils';
import AppStore from '@/store/index';
import SignIn from './Sign-in';

import Vue from 'vue';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Vuelidate);

describe('SignIn', () => {
  let wrapper;

  const $store = AppStore;

  beforeAll(() => {
    wrapper = shallowMount(SignIn, {
      mocks: {
        $store,
      },
    });
  });

  test('should SignIn is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should state validation model is invalid', () => {
    expect(wrapper.vm.$v.$invalid).toBeTruthy();
  });

  test('should computed property isValid is false', () => {
    expect(wrapper.vm.isValid).toBeFalsy();
  });
});
