import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderBottom: '1px solid black',
    padding: '10px 8px',
    fontSize: '20px'
  },
})

class NotificationItem extends React.PureComponent {
  constructor (props) {
    super(props)
  }
  render(){

    if (this.props.value) {
      return (<li data-notification-type={this.props.type} className={css(styles.item)} onClick={() => {this.props.markAsRead(this.props.id)}} >{this.props.value}</li>);
    } else {
      return (
        <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} className={css(styles.item)} onClick={() => {this.props.markAsRead(this.props.id)}}></li>
      );
    }
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {}
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;

