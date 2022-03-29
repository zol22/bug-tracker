import React from "react";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  /*const [userData, setUserData] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null
  );*/
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("userData");
    //setUserData(null);
  };

  const onSuccess = async (result) => {
    //console.log("LOGIN SUCCESS! Current user: ", result.profileObj);

    //send the ID token to your server with an HTTPS POST request
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        token: result.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data) {
      navigate("/dashboard");
    }
    console.log(data);
    //setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };
  return (
    <div className="grid place-items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col md:w-2/4"
      >
        <div className="mb-6 ">
          <label
            className=" text-gray-500 text-sm font-bold mb-2 flex justify-start"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
            {...register("username")}
          />
        </div>
        <div className="mb-6">
          <label
            className="text-gray-500 text-sm font-bold mb-2 flex justify-start"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="mb-6">
          <label
            className="text-gray-500 text-sm font-bold mb-2 flex justify-start"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
            autoComplete="on"
          />
          <p className="text-red-500 text-xs italic flex justify-start">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-xs text-blue-400 underline hover:text-blue-300 lg:ml-0 ml-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex">
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true} //isSignedIn={true} attribute will call onSuccess callback on load to keep the user signed in.
          />
        </div>
      </form>
      <button className="mt-8" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Login;
