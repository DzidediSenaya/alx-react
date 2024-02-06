import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div className="Notifications">
        <p>Here are the notifications</p>
        <ul>
          {this.props.list.map(notification => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              markAsRead={this.markAsRead}
              id={notification.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Notifications;

