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

  const onSuccess = async (result) => {
    //send the ID token to your server with an HTTPS POST request

    try {
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
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/dashboard");
    } catch (error) {
      console.log("error");
      throw new Error("Isuue with login", error.message);
    }
  };

  const signAsGuest = () => {
    const data = {
      name: "guest",
    };
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/dashboard");
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
          <button className="bg-violet-900 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded mr-5">
            Login
          </button>
          <button
            type="submit"
            className="bg-violet-900 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded"
            onClick={signAsGuest}
          >
            Login as Guest
          </button>
        </div>
        <div className="flex mt-5">
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true} //isSignedIn={true} attribute will call onSuccess callback on load to keep the user signed in.
          />
        </div>
        <div>
          <p className="text-sm flex justify-center mt-8 text-gray-400">
            Not a member?{" "}
            <a className="ml-2 font-bold underline hover:text-blue-300  cursor-pointer">
              {" "}
              Sign up now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
