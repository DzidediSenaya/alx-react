import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('should not rerender when updating props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const { rerender } = render(<Notifications listNotifications={listNotifications} />);

    // Capture the current snapshot
    const { container } = render(<Notifications listNotifications={listNotifications} />);
    const initialSnapshot = container.innerHTML;

    // Rerender with the same props
    rerender(<Notifications listNotifications={listNotifications} />);

    // Check if the component didn't rerender
    expect(container.innerHTML).toEqual(initialSnapshot);
  });

  it('should rerender when updating props with a longer list', () => {
    const initialList = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const updatedList = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', value: 'Notification 3' }, // Adding an additional notification
    ];

    const { rerender } = render(<Notifications listNotifications={initialList} />);

    // Capture the initial snapshot
    const { container } = render(<Notifications listNotifications={initialList} />);
    const initialSnapshot = container.innerHTML;

    // Rerender with a longer list
    rerender(<Notifications listNotifications={updatedList} />);

    // Check if the component rerendered
    expect(container.innerHTML).not.toEqual(initialSnapshot);
  });
});

