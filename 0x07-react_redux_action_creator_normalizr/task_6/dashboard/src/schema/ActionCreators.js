import { markAsRead, setNotificationFilter } from './notificationActionCreators';

export const boundMarkAsRead = index => dispatch => {
  dispatch(markAsRead(index));
};

export const boundSetNotificationFilter = filter => dispatch => {
  dispatch(setNotificationFilter(filter));
};
