// CourseList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

test('renders correct message when listCourses is empty', () => {
  const { getByText } = render(<CourseList listCourses={[]} />);
  const messageElement = getByText(/No course available yet/i);
  expect(messageElement).toBeInTheDocument();
});

test('does not display message when listCourses is not empty', () => {
  const courses = [{ id: 1, name: 'ES6', credit: 60 }];
  const { queryByText } = render(<CourseList listCourses={courses} />);
  const messageElement = queryByText(/No course available yet/i);
  expect(messageElement).toBeNull();
});

