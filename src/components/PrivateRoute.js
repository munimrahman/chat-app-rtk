import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
