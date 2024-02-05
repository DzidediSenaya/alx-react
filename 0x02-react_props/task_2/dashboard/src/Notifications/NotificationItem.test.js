// NotificationItem.test.js
import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders NotificationItem component without crashing', () => {
  const { getByText } = render(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />);
  const notificationElement = getByText(/test/i);
  expect(notificationElement).toBeInTheDocument();
});

test('renders correct html by passing dummy type and value props', () => {
  const { getByText } = render(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />);
  const notificationElement = getByText(/test/i);
  expect(notificationElement).toBeInTheDocument();
  expect(notificationElement).toHaveAttribute('data-notification-type', 'default');
});

test('renders correct html by passing a dummy html prop', () => {
  const { getByText } = render(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />);
  const notificationElement = getByText(/test/i);
  expect(notificationElement).toBeInTheDocument();
  expect(notificationElement).toHaveAttribute('data-notification-type', 'default');
});

