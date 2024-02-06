import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Notifications from './Notifications';

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

it('calls console.log when markAsRead is called', () => {
  const spy = jest.spyOn(console, 'log');
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>test</strong>' } },
  ];

  act(() => {
    render(<Notifications list={notifications} />, container);
  });

  const instance = container.querySelector('.Notifications');
  instance.markAsRead(1);
  expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');

  spy.mockRestore();
});
