import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./redux/action/allaction";
import { toast } from "react-toastify";
import { RootStateTSX } from "./redux/store";
import { notiSound } from "../model/typetsx";

const Login: React.FC<notiSound> = ({ playSound }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUsername = useSelector(
    (state: RootStateTSX) => state.money.username
  );
  const storedPassword = useSelector(
    (state: RootStateTSX) => state.money.password
  );

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === storedUsername && password === storedPassword) {
      dispatch(login());
      toast.success(`Welcome, ${username}!`);
      playSound();
      navigate("/main");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full flex flex-col  md:mt-0 -mt-40 sm:mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign In
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <div className="relative">
            <label
              htmlFor="username"
              className="absolute -top-2 left-3 bg-white px-2 text-gray-600 text-sm"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Test"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-2 text-gray-600 text-sm"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Test@123"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
