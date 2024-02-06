import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

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

it('calls logOut function and displays alert when ctrl+h keys are pressed', () => {
  const logOutMock = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  act(() => {
    render(<App logOut={logOutMock} />, container);
  });

  const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
  document.dispatchEvent(event);

  expect(logOutMock).toHaveBeenCalled();
  expect(alertMock).toHaveBeenCalledWith('Logging you out');

  alertMock.mockRestore();
});

