import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { AppContext } from './AppContext';

describe('App component', () => {
  it('should mark notification as read', () => {
    const wrapper = shallow(<App />);
    const mockNotifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
      { id: 3, message: 'Notification 3' }
    ];
    wrapper.instance().context.markNotificationAsRead(2);
    expect(wrapper.instance().state.listNotifications).toEqual([
      { id: 1, message: 'Notification 1' },
      { id: 3, message: 'Notification 3' }
    ]);
  });
});

