import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // Fetch get /api/dashboard
  return localStorage.getItem("userData") ? children : <Navigate to="/" />;
}

export default PrivateRoute;
