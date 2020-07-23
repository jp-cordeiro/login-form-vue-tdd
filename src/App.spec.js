import { shallowMount } from '@vue/test-utils';
import App from './App';

describe('App', () => {
  test('should App is a Vue instance', () => {
    const wrapper = shallowMount(App);

    expect(wrapper).toBeTruthy();
  });
});
