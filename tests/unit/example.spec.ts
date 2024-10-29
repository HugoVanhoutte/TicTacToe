import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import fn = jest.fn;

test('App.vue renders exactly 9 boxes', () => {
  const wrapper = mount(App);
  expect(wrapper.findAll('.box').length).toBe(9);
});

test('box should trigger setCross() when clicked', () => {
  const wrapper = mount(App);
  const setCross = fn();
  wrapper.find('.box').trigger('click');
  expect(setCross).toHaveBeenCalled();
});
