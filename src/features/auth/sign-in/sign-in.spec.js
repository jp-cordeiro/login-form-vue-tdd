import Vue from 'vue';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppStore from '@/store/index';
import SignIn from './Sign-in';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Vuelidate);

// const localVue = createLocalVue();
// localVue.use(Vuex);
// localVue.use(Vuelidate);

describe('SignIn', () => {
  let wrapper;

  const $store = AppStore;

  beforeEach(() => {
    wrapper = shallowMount(SignIn, {
      // localVue,
      mocks: {
        $store,
      },
    });
  });

  test('should SignIn is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should keepSignedIn starts with true', () => {
    expect(wrapper.vm.user.keepSignedIn).toBeTruthy();
  });

  test('should load navigation with empty string', () => {
    expect(wrapper.vm.navigation).toBe('');
  });

  test('should state validation model is invalid', () => {
    expect(wrapper.vm.$v.$invalid).toBeTruthy();
  });

  test('should computed property isValid is false', () => {
    expect(wrapper.vm.isValid).toBeFalsy();
  });
});
