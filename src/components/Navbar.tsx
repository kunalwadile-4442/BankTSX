import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/action/allaction";
import { toast } from "react-toastify";
import { RootStateTSX } from "./redux/store";
import { notiSound } from "../model/typetsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC<notiSound> = ({ playSound }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootStateTSX) => state.money.isAuth);

  const handleLogout = (): void => {
    localStorage.clear();
    playSound();
    toast.error("Logout Successfully");
    dispatch(logout());
    navigate("/");
  };

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link className="text-2xl font-bold tracking-widest uppercase" to="/">
            Bank Application
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 items-center">
            <li className="nav-item">
              <Link
                className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300"
                to="/"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300"
                to="/"
              >
                Contact
              </Link>
            </li>
            {isAuth && (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300 bg-transparent border-none cursor-pointer"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>

          {/* Burger Icon for Mobile */}
          <button
            className="text-white text-3xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "" : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Sliding from Left */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <button
            className="text-white text-3xl absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
          <ul className="mt-16 flex flex-col space-y-6 items-start pl-6">
            <li className="nav-item">
              <Link
                className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300"
                to="/about"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300"
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            {isAuth && (
              <li className="nav-item">
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="text-lg font-medium text-gray-300 uppercase hover:text-red-500 transition duration-300 bg-transparent border-none cursor-pointer"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
