import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import NotificationItem from './NotificationItem';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('calls markAsRead when clicked', () => {
  const spy = jest.fn();
  const notification = { id: 1, type: 'default', value: 'New course available' };

  act(() => {
    render(
      <NotificationItem
        id={notification.id}
        type={notification.type}
        value={notification.value}
        markAsRead={spy}
      />,
      container
    );
  });

  const listItem = container.querySelector('li');
  act(() => {
    listItem.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(spy).toHaveBeenCalledWith(1);
});

