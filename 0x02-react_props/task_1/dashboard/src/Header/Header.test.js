// Header.test.js
import React from 'react';
import { shallow } from 'enzyme'; // Assuming you're using Enzyme for shallow rendering
import Header from './Header';

test('shallow renders Header component without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.exists()).toBeTruthy();
});

test('renders img and h1 tags in Header component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img')).toHaveLength(1);
  expect(wrapper.find('h1')).toHaveLength(1);
});

