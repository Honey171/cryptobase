import React from 'react';

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

function Footer() {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex w-full justify-evenly md:max-w-[300px]">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right font-semibold">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-primary border border-input p-2 m-2 w-full shadow-xl rounded-2xl md:w-auto"
                  />
                  <button className="text-btnText bg-button px-3 p-2 w-full ml-2 rounded-2xl shadow-xl hover:shadow-2xl md:w-auto md:ml-0">
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram
                  size={20}
                  className="cursor-pointer"
                />
                <FaTwitter
                  size={20}
                  className="cursor-pointer"
                />
                <FaFacebook
                  size={20}
                  className="cursor-pointer"
                />
                <FaReddit
                  size={20}
                  className="cursor-pointer"
                />
                <FaGithub
                  size={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">
        This clone for educational purpose Inspired by{' '}
        <a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noreferrer"
          className="text-accent text-lg hover:shadow-2xl"
        >
          Coingecko
        </a>
      </p>
    </div>
  );
}

export default Footer;
