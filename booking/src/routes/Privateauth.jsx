import { AuthContext } from "../context/Authcontext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Privateauth = ({ children }) => {
  let { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/registered" />;
  }

  return children;
};

export default Privateauth;
