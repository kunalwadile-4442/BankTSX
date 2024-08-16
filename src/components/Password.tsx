  import React, { useState, ChangeEvent, FormEvent } from "react";
  import { FaEye, FaEyeSlash } from "react-icons/fa";
  import { PasswordProps } from "../model/typetsx";

  const Password: React.FC<PasswordProps> = ({
    onPasswordSubmit,
    onForgotPassword,
  }) => {
    const [enteredPassword, setEnteredPassword] = useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEnteredPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      onPasswordSubmit(enteredPassword);
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center ">
            Enter Password
          </h2>
          <form action="">
            <div className="relative mb-6">
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={enteredPassword}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400"
              >
                {isPasswordVisible ? (
                  <FaEyeSlash size={22} />
                ) : (
                  <FaEye size={22} />
                )}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Submit
            </button>

            <p
              onClick={onForgotPassword}
              className="block text-blue-600 underline mt-4 text-center cursor-pointer text-sm"
            >
              Forgot Password?
            </p>
          </form>
        </div>
      </div>
    );
  };

  export default Password;
