import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet, keyframes } from 'aphrodite';
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";

const fadeIn = keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 }
});

const bounce = keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' }
});

const styles = StyleSheet.create({
  notifications: {
    border: '3px dashed #e14852',
    padding: '0.25em',
    float: 'right',
    margin: '20px 10px 0 0',
    fontSize: '20px',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'white',
    zIndex: '9999',
    overflow: 'scroll',
  },
  ulSmall: {
    padding: '0',
    listStyle: 'none'
  },
  menuItem: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    animationName: [fadeIn, bounce],
    animationDuration: '1s, 0.5s',
    animationIterationCount: '3, 3',
    animationTimingFunction: 'ease-in-out, ease-in-out',
    animationFillMode: 'forwards',
    '@media (max-width: 900px)': {
      display: 'none'
    },
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
      animationTimingFunction: 'ease-in-out, ease-in-out',
      animationFillMode: 'forwards',
    }
  }
})

class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    )
  }
  
  render () { 
    return (
      <>
        <div className={css(styles.menuItem)}><div>Your notifications</div></div>
    
        { this.props.displayDrawer ? 
          (<div className='Notifications'>
            <div className={css(styles.notifications)}>
              <button
                style={{
                  right: 45,
                  border: "none",
                  position: "absolute",
                  background: "transparent",
                }}
                aria-label="close"
                onClick={() => console.log("Close button has been clicked")}
              >
              <img src={closeButton} alt="close button icon" />
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.ulSmall)}>
                {this.props.listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
                {this.props.listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} markAsRead={() => {this.markAsRead(not.id)}} />))}
              </ul>
            </div>
          </div>)
             
          : <></>
        }
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;

