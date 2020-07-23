import Vue from 'vue';
import Vuex from 'vuex';

import { shallowMount } from '@vue/test-utils';
import AppStore from '@/store/index';
import Auth from './Auth';

import SignIn from './sign-in/Sign-in';
import SignUp from './sign-up/Sign-up';

Vue.config.productionTip = false;
Vue.use(Vuex);

describe('Auth', () => {
  let wrapper;

  const $store = AppStore;

  beforeEach(() => {
    wrapper = shallowMount(Auth, {
      mocks: {
        $store,
      },
    });
  });

  test('should SignIn must be inside', () => {
    const signInComponent = wrapper.findComponent(SignIn);
    expect(signInComponent.exists()).toBeTruthy();
  });

  test('should SingUp must be inside', () => {
    const signUpComponent = wrapper.findComponent(SignUp);
    expect(signUpComponent.exists()).toBeTruthy();
  });

  test('should set navigation when created', () => {
    expect(wrapper.vm.navigation).toBe('signIn');
  });

  test('should Auth is Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });
});
