import { createContext, useState } from "react";

let AuthContext = createContext();

let auth = JSON.parse(localStorage.getItem("Auth")) || false;

const Authcontextprovider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(auth);
  return (
    <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { Authcontextprovider, AuthContext };
