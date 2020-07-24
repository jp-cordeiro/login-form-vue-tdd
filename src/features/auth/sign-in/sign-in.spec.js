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
  let signInComponent;
  let user;

  const $store = AppStore;

  const setData = values => {
    if (!values) {
      wrapper.setData({
        user: {
          username: 'Fulano',
          password: 123456,
        },
      });
    } else {
      wrapper.setData({
        user: {
          ...values,
        },
      });
    }
  };

  const resetData = () => {
    wrapper.setData({
      user: {
        username: '',
        password: '',
      },
    });
  };

  beforeEach(() => {
    wrapper = shallowMount(SignIn, {
      // localVue,
      sync: false,
      mocks: {
        $store,
      },
    });

    signInComponent = wrapper.vm;
    user = signInComponent.$data.user;
  });

  test('should SignIn is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should keepSignedIn starts with true', () => {
    expect(user.keepSignedIn).toBeTruthy();
  });

  test('should load navigation with empty string', () => {
    expect(signInComponent.navigation).toBe('');
  });

  test('should state validation model is invalid', () => {
    expect(signInComponent.$v.$invalid).toBeTruthy();
  });

  test('should computed property isValid is false', () => {
    expect(signInComponent.isValid).toBeFalsy();
  });

  test('should the correct properties are present in the component state', () => {
    const userProperties = Object.keys(user);
    const expectedProperties = ['username', 'password', 'keepSignedIn'];

    expect(userProperties).toEqual(expectedProperties);
  });

  test('should isValid must be false if not username assign to the user property ', () => {
    wrapper.setData({
      user: {
        username: '',
        password: '123456',
      },
    });

    expect(signInComponent.isValid).toBeFalsy();
  });

  test('should isValid must be false if not password assign to the user property ', () => {
    wrapper.setData({
      user: {
        username: 'Fulano',
        password: '',
      },
    });

    expect(signInComponent.isValid).toBeFalsy();
  });
});
