// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component without crashing', () => {
  const { getByText } = render(<App />);
  const loginElement = getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});

test('renders CourseList component when isLoggedIn is true', () => {
  const { getByText } = render(<App isLoggedIn />);
  const courseListElement = getByText(/Available courses/i);
  expect(courseListElement).toBeInTheDocument();
});

