import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, updatePassword } from "./redux/action/allaction";
import Password from "./Password";
import PasswordReset from "./PasswordReset";
import { RootStateTSX } from "./redux/store";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state: RootStateTSX) => state.money.balance);
  const password = useSelector((state: RootStateTSX) => state.money.password);

  const [amount, setAmount] = useState<string>("");
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [isResettingPassword, setIsResettingPassword] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const handleWithdraw = (): void => {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount <= 0) {
      alert("Enter a valid amount to withdraw!");
      return;
    }
    if (balance >= parsedAmount) {
      dispatch(withdraw(parsedAmount));
      alert(`You withdrew ${parsedAmount} Rs from your account`);
      setAmount("");
    } else {
      alert("Insufficient balance");
    }
  };

  const handleDeposit = (): void => {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount <= 0) {
      alert("Enter a valid amount to deposit!");
      return;
    }
    dispatch(deposit(parsedAmount));
    alert(`You deposited ${parsedAmount} Rs into your account`);
    setAmount("");
  };

  const handleShowBalance = (): void => {
    setShowBalance(!showBalance);
  };

  const handleLockScreen = (): void => {
    setIsLocked(true);
  };

  const handlePasswordSubmit = (enteredPassword: string): void => {
    if (enteredPassword === password) {
      setIsLocked(false);
    } else {
      alert("Incorrect password");
    }
  };

  const handleForgotPassword = (): void => {
    setIsResettingPassword(true);
  };

  const handleResetPassword = (newPassword: string): void => {
    dispatch(updatePassword(newPassword));
    setIsResettingPassword(false);
    setIsLocked(true);
  };

  const handleGoBack = (): void => {
    setIsResettingPassword(false);
  };

  if (isResettingPassword) {
    return (
      <div className="transition-opacity duration-500 opacity-100">
        <PasswordReset
          onResetPassword={handleResetPassword}
          onGoBack={handleGoBack}
        />
      </div>
    );
  }

  if (isLocked) {
    return (
      <div className="transition-opacity duration-500 opacity-100">
        <Password
          onPasswordSubmit={handlePasswordSubmit}
          onForgotPassword={handleForgotPassword}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Bank Account
      </h1>
      <input
        type="number"
        value={amount}
        onChange={handleInputChange}
        placeholder="Enter amount"
        className="p-2 w-full max-w-xs mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
      />
      <p className="text-lg mb-2 text-gray-700">
        Balance: <strong>{showBalance ? `${balance}` : "----"}</strong> Rs
      </p>
      {balance < 500 && (
        <p className="text-red-500 mb-4 text-center">
          <strong>Maintain minimum balance of 500 Rs!</strong>
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button
          onClick={handleWithdraw}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
        >
          Withdraw
        </button>
        <button
          onClick={handleDeposit}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform duration-300 transform hover:scale-105"
        >
          Deposit
        </button>
        <button
          onClick={handleShowBalance}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-transform duration-300 transform hover:scale-105"
        >
          {showBalance ? "Hide Balance" : "Show Balance"}
        </button>
        <button
          onClick={handleLockScreen}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-transform duration-300 transform hover:scale-105"
        >
          Home page
        </button>
      </div>
    </div>
  );
};

export default MainPage;
