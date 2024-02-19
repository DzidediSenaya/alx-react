import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.PureComponent {
  render() {
    return (
      <div className='notifications'>
        <ul>
          {this.props.listNotifications.map(not => (
            <li key={not.id} onClick={() => this.props.markNotificationAsRead(not.id)}>
              {not.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.defaultProps = {
  listNotifications: [],
  markNotificationAsRead: () => {}
};

Notifications.propTypes = {
  listNotifications: PropTypes.array,
  markNotificationAsRead: PropTypes.func
};

export default Notifications;

