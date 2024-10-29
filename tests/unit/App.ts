import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('App.vue', () => {
  test('App.vue renders exactly 9 boxes', () => {
    const wrapper = mount(App);
    expect(wrapper.findAll('.box').length).toBe(9);
  });
  test('box should trigger setCross() when clicked', async () => {
    const wrapper = mount(App, {});
    const setCrossSpy = jest.spyOn(wrapper.vm, 'setCross');
    await wrapper.find('.box').trigger('click');
    expect(setCrossSpy).toHaveBeenCalled();
  });
});
