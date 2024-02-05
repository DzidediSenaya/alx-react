// Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';

const Notifications = ({ displayDrawer }) => {
  return (
    <div>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          {/* Your existing code */}
        </div>
      )}
    </div>
  );
};

export default Notifications;

