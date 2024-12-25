import React from "react";
import logo from "../../assets/images/cc_logo.png";
import loginImage from "../../assets/images/login_image.svg"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const navigate = useNavigate();

  return (
    <div className="w-full h-[91vh] flex flex-col md:flex-row overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col items-center bg-white px-8 w-full py-4 justify-center space-y-4">
        <img src={logo} alt="Logo" className="h-20 rounded-full" />
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          ChangeCollect
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Please login to your account
        </p>
        <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#3b65ff] text-white font-semibold rounded-lg hover:opacity-90"
            onClick={() => navigate("/app")}
          >
            LOG IN
          </button>
        </form>
      </div>

      {/* Right Image Section
      <div className="w-1/2 hidden md:flex items-center justify-center">
          <img
            src={loginImage}
            alt="Illustration"
            className="w-3/4"
          />
        </div> */}
    </div>
  );
};

export default LoginPage;
