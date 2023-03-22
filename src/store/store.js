import React, { useState, createContext } from "react";
const AuthContext = createContext();

function AuthProvider(props) {
  const [isLogin, setIslogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIslogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
