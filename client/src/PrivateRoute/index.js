import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  return localStorage.getItem("userData") ? children : <Navigate to="/" />;
}
export default PrivateRoute;
