// File: ~/alx-react/0x01-react_intro/task_3/dashboard/src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Tests', () => {
  // Test that App renders without crashing
  test('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  // Verify that App renders a div with the class App-header
  test('App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  // Verify that App renders a div with the class App-body
  test('App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  // Verify that App renders a div with the class App-footer
  test('App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});
