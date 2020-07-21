import { shallowMount } from '@vue/test-utils';
import AppStore from '@/store/index';
import SignIn from './Sign-in';

import Vue from 'vue';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(AppStore);
Vue.use(Vuelidate);

describe('SignIn', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(SignIn);
  });

  test('is a Vue instance', () => {
    console.log(wrapper.vm.$v);
    expect(wrapper).toBeTruthy();
  });
});
