// src/Notifications/Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders Notifications component', () => {
  const { getByText } = render(<Notifications />);
  const linkElement = getByText(/Notifications Component/i);
  expect(linkElement).toBeInTheDocument();
});
