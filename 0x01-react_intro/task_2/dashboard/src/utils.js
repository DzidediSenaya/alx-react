// File: ~/alx-react/0x01-react_intro/task_2/dashboard/src/utils.js

export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
