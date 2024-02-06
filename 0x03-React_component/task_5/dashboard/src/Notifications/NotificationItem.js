import React, { memo } from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, markAsRead, id }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li data-notification-type={type} onClick={handleClick}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default memo(NotificationItem);

