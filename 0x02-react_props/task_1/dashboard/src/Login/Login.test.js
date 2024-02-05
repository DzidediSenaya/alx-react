// Login.test.js
import React from 'react';
import { shallow } from 'enzyme'; // Assuming you're using Enzyme for shallow rendering
import Login from './Login';

test('shallow renders Login component without crashing', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.exists()).toBeTruthy();
});

test('renders 2 input tags and 2 label tags in Login component', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
});

