import React, { useState, createContext } from "react";
const AuthContext = createContext();

function AuthProvider(props) {
  const [isLogin, setIslogin] = useState(false);
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        token,
        setIslogin,
        setToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
