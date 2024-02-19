import React from "react";

const AppContext = React.createContext();

export const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false
};

export const logOut = () => {
  // Logout functionality here
};

const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState(defaultUser);

  const logIn = (email, password) => {
    setUser({ email, password, isLoggedIn: true });
  };

  return (
    <AppContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

