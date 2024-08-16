  import React, { useState, ChangeEvent } from "react";
  import { FaEye, FaEyeSlash } from "react-icons/fa";
  import { PasswordResetProps } from "../model/typetsx";

  const PasswordReset: React.FC<PasswordResetProps> = ({
    onResetPassword,
    onGoBack,
  }) => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isNewPasswordVisible, setIsNewPasswordVisible] =
      useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
      useState<boolean>(false);

    const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      setConfirmPassword(event.target.value);
    };

    const toggleNewPasswordVisibility = () => {
      setIsNewPasswordVisible(!isNewPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    const handleResetSubmit = () => {
      if (newPassword !== confirmPassword) {
        setError("Passwords do not match. Please try again.");
      } else {
        setError("");

        onResetPassword(newPassword);
      }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Reset Password
          </h2>

          <div className="relative mb-6">
            <input
              type={isNewPasswordVisible ? "text" : "password"}
              value={newPassword}
              onChange={handleNewPasswordChange}
              placeholder="New password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400"
            >
              {isNewPasswordVisible ? (
                <FaEyeSlash size={22} />
              ) : (
                <FaEye size={22} />
              )}
            </button>
          </div>

          <div className="relative mb-6">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm new password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400"
            >
              {!isConfirmPasswordVisible ? (
              
                <FaEye size={22} />
              ) : (
                <FaEyeSlash size={22} /> )}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <button
            onClick={handleResetSubmit}
            className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Reset Password
          </button>
          <p
            onClick={onGoBack}
            className="block text-blue-600 underline mt-4 text-center cursor-pointer text-sm"
          >
            Back to Lock Page
          </p>
        </div>
      </div>
    );
  };

  export default PasswordReset;
