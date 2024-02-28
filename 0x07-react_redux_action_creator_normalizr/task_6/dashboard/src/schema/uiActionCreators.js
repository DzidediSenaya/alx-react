import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

export const boundLogin = (email, password) => dispatch => {
  dispatch(login(email, password));
};

export const boundLogout = () => dispatch => {
  dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => dispatch => {
  dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => dispatch => {
  dispatch(hideNotificationDrawer());
};
