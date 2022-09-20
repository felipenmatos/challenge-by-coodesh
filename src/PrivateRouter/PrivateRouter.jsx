import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { isAuth } from "../Autentication/isAuth";

const PrivateRoute = ({ children }) => {
  var value = isAuth();

  return value ? children : <Navigate to="/" />;
};

export default PrivateRoute;
