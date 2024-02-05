// CourseList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

test('renders CourseList component without crashing', () => {
  const { getByText } = render(<CourseList />);
  const courseListElement = getByText(/Available courses/i);
  expect(courseListElement).toBeInTheDocument();
});

// Add more tests as per the task requirements

