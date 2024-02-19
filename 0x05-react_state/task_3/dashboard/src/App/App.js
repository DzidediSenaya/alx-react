import React, { useState } from 'react';
import { Notifications } from '../index';
import { AppProvider } from './AppContext';

const App = () => {
  const [listNotifications, setListNotifications] = useState([]);

  const markNotificationAsRead = (id) => {
    setListNotifications(listNotifications.filter(not => not.id !== id));
  };

  return (
    <AppProvider>
      <Notifications listNotifications={listNotifications} markNotificationAsRead={markNotificationAsRead} />
    </AppProvider>
  );
};

export default App;

