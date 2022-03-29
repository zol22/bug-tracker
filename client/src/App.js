import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
