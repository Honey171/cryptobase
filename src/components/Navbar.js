import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { UserAuth } from '../context/AuthContext';

function Navbar() {
  const [nav, setNav] = useState(false);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const navHandler = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Cryptobase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      {user?.email ? (
        <div>
          <Link
            to="/account"
            className="p-4"
          >
            Account
          </Link>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to="/signin">
            <button className="p-4 hover:text-accent">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl">
              Sign Up
            </button>
          </Link>
        </div>
      )}

      <div
        className="block md:hidden cursor-pointer z-10"
        onClick={navHandler}
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {nav && (
        <div className="fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10  md:hidden">
          <ul className="w-full p-4">
            <li
              onClick={navHandler}
              className="border-b py-6"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="border-b py-6"
              onClick={navHandler}
            >
              <Link to="/account">Account</Link>
            </li>
            <li className="py-6">
              <ThemeToggle />
            </li>
          </ul>
          {!user && (
            <div className="flex flex-col w-full p-4">
              <Link to="/signin">
                <button
                  onClick={navHandler}
                  className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl"
                >
                  Sign In
                </button>
              </Link>
              <Link
                onClick={navHandler}
                to="/signup"
              >
                <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
