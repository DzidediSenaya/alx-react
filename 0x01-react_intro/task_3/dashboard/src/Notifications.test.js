// File: ~/alx-react/0x01-react_intro/task_3/dashboard/src/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Tests', () => {
  // Test that Notifications renders without crashing
  test('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  // Verify that Notifications renders three list items
  test('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  // Verify that Notifications renders the text Here is the list of notifications
  test('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains('Here is the list of notifications')).toBeTruthy();
  });
});
