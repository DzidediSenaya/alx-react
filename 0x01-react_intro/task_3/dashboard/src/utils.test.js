// File: ~/alx-react/0x01-react_intro/task_3/dashboard/src/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils Tests', () => {
  // Test for getFullYear
  test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });

  // Test for getFooterCopy
  test('getFooterCopy returns correct string for true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  test('getFooterCopy returns correct string for false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });

  // Test for getLatestNotification
  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
