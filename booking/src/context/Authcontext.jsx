import { createContext, useState } from "react";

let AuthContext = createContext();

const Authcontextprovider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { Authcontextprovider, AuthContext };
