import { shallowMount } from '@vue/test-utils';
import App from './App';

describe('Auth', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(App);

    expect(wrapper).toBeTruthy();
  });
});
