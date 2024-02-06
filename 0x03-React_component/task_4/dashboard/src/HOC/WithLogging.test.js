import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import WithLogging from './WithLogging';

// Mock console.log
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

describe('WithLogging HOC', () => {
  it('logs mount and unmount events with "Component" when wrapped element is pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p>Test component</p>);
    
    let container = document.createElement('div');
    act(() => {
      render(<WrappedComponent />, container);
    });
    
    expect(console.log).toHaveBeenCalledWith('Component is mounted');
    
    act(() => {
      unmountComponentAtNode(container);
    });
    
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('logs mount and unmount events with the component name when wrapped element is the Login component', () => {
    class Login extends React.Component {
      render() {
        return <div>Login component</div>;
      }
    }

    const WrappedComponent = WithLogging(Login);

    let container = document.createElement('div');
    act(() => {
      render(<WrappedComponent />, container);
    });

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    act(() => {
      unmountComponentAtNode(container);
    });

    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

