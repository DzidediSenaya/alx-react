import React, { useContext } from "react";
import { AppContext } from "../App/AppContext";

const Header = () => {
  const { user, logOut } = useContext(AppContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <h1>Header</h1>
      {user.isLoggedIn && (
        <div id="logoutSection">
          Welcome {user.email} (<a onClick={handleLogOut}>logout</a>)
        </div>
      )}
    </div>
  );
};

export default Header;

