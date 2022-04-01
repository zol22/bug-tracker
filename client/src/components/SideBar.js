import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

function SideBar() {
  const navigate = useNavigate();

  const onSuccess = () => {
    console.log("Logout");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const logoutAsGuest = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };
  return (
    <div className="border-r-2 border-neutral-400">
      <nav className="p-5">
        <ul>
          <li className="mb-5">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mb-5">
            <Link to="/buglists">Bug Lists</Link>
          </li>
        </ul>
        {JSON.parse(localStorage.getItem("userData")).name === "guest" ? (
          <button
            className="bg-violet-900 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded"
            onClick={logoutAsGuest}
          >
            Logout
          </button>
        ) : (
          <GoogleLogout
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          />
        )}
      </nav>
    </div>
  );
}

export default SideBar;
