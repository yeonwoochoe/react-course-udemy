import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loigHandler = () => {
    setIsAuthenticated(true);
  };
  return (
    <AuthContext.Provider
      value={{ login: loigHandler, isAuth: isAuthenticated }}
    >
      {" "}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
