// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders NotificationItem elements in Notifications component', () => {
  const { container } = render(<Notifications displayDrawer />);
  const notificationItems = container.querySelectorAll('.Notifications li');
  expect(notificationItems.length).toBeGreaterThan(0);
});

test('verifies that the first NotificationItem element renders the right html', () => {
  const { getByText } = render(
    <Notifications displayDrawer>
      {/* Add a NotificationItem with specific content */}
      <NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />
      {/* Add other NotificationItems if needed */}
    </Notifications>
  );
  const notificationElement = getByText(/test/i);
  expect(notificationElement).toBeInTheDocument();
});
