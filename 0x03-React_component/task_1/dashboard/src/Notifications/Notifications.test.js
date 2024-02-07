// Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ listNotifications, displayDrawer }) => {
  return (
    <div>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length === 0 ? (
            <NotificationItem value="No new notification for now" />
          ) : (
            listNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                html={notification.html}
                value={notification.value}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
};

export default Notifications;

