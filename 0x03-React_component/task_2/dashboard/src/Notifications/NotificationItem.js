import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.markAsRead(this.props.id);
  }

  render() {
    return (
      <li data-notification-type={this.props.type} onClick={this.handleClick}>
        {this.props.value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default NotificationItem;
