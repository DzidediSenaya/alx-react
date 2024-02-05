// Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer }) => {
  // Your existing code

  return (
    <div className="Notifications">
      <button
        type="button"
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        style={{
          position: 'absolute',
          right: 10,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        <span aria-hidden="true">×</span>
      </button>
      <ul>
        {/* Replace <li> tags with NotificationItem components */}
        {displayDrawer ? notificationsList : null}
      </ul>
    </div>
  );
};

export default Notifications;
