import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="border-2 border-neutral-900">
      <nav className="p-5">
        <ul>
          <li className="mb-5">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mb-5">
            <Link to="/dashboard">Bug Lists</Link>
          </li>
          <li className="mb-5">
            <Link to="/dashboard">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
