import React from "react";
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  bodyLogin: {
    margin: '20px 0 0px 0px',
    flexGrow: 1
  },
  smallInput : {
    '@media (max-width: 900px)': {
      display: 'block',
      marginBottom: '5px',
    }
  },
  button: {
    '@media (max-width: 900px)': {
      display: 'block',
      marginTop: '10px',
    }
  }
})

function Login() {
  return (
    <div className='body-login'>
      <div className={css(styles.bodyLogin)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="fname" className={css(styles.smallInput)}>Email:</label>
        <input type="email" id="email" className={css(styles.smallInput)}/>
        <label htmlFor="lname" className={css(styles.smallInput)}>Password:</label>
        <input type="password" id="password" className={css(styles.smallInput)}/>
        <button className={css(styles.button)}>OK</button>
      </div>
    </div>
  );
}

export default Login;

