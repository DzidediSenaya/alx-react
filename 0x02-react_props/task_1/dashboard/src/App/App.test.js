// App.test.js
import React from 'react';
import { shallow } from 'enzyme'; // Assuming you're using Enzyme for shallow rendering
import App from './App';
import Notifications from './Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

test('contains the Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Notifications)).toHaveLength(1);
});

test('contains the Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header)).toHaveLength(1);
});

test('contains the Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Login)).toHaveLength(1);
});

test('contains the Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer)).toHaveLength(1);
});
