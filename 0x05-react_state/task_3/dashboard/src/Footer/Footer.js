import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </div>
  );
};

export default Footer;

