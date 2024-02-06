import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ listNotifications }) => {
  return (
    <div>
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.map(notification => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.listNotifications.length === nextProps.listNotifications.length;
};

export default React.memo(Notifications, areEqual);

