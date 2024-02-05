// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('displays menu item when displayDrawer is false', () => {
  const { queryByText } = render(<Notifications displayDrawer={false} />);
  const menuItemElement = queryByText(/Your notifications/i);
  expect(menuItemElement).toBeInTheDocument();
});

test('does not display Notifications when displayDrawer is false', () => {
  const { queryByText } = render(<Notifications displayDrawer={false} />);
  const notificationsElement = queryByText(/Your notifications/i);
  expect(notificationsElement).toBeNull();
});

test('displays menu item when displayDrawer is true', () => {
  const { getByText } = render(<Notifications displayDrawer />);
  const menuItemElement = getByText(/Your notifications/i);
  expect(menuItemElement).toBeInTheDocument();
});

test('displays Notifications when displayDrawer is true', () => {
  const { getByText } = render(<Notifications displayDrawer />);
  const notificationsElement = getByText(/Your notifications/i);
  expect(notificationsElement).toBeInTheDocument();
});

