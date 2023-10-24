import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("Token");
  return token ? children : <Navigate to={"/login"} />;
};
