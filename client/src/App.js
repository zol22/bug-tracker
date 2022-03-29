import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import BugLists from "./routes/BugLists";
import PrivateRoute from "./PrivateRoute";
import Header from "./components/Header";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div>
      <Header title="Bug Tracker" />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/buglists"
          element={
            <PrivateRoute>
              <BugLists />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
