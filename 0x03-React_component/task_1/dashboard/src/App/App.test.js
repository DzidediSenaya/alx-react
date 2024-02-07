// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should call logOut function and display alert when pressing Control and H keys', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const { container } = render(<App isLoggedIn={true} logOut={logOutMock} />);
    
    fireEvent.keyDown(container, { key: 'h', ctrlKey: true });

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  });
});
