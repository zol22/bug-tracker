import React from "react";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div className="w-full bg-violet-900 px-10 py-5">
      <div className="text-2xl text-white font-bold flex justify-between">
        <Link to="/dashboard">Logo</Link>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Header;
