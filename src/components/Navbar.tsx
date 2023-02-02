import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container mx-auto flex w-full items-center justify-between py-8 px-5 text-white">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mr-12 w-16 cursor-pointer" />
        <ul className="hidden items-center gap-6 text-lg font-medium lg:flex">
          <li>
            <a href="#home" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#wgpt3" className="hover:text-gray-200">
              What is GPT?
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-200">
              Open AI
            </a>
          </li>
          <li>
            <a href="#possibility" className="hover:text-gray-200">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-200">
              Library
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4 font-medium">
        <div className="hidden items-center justify-center gap-4 md:flex">
          <a href="#home">Sign In</a>
          <button
            type="button"
            className="rounded bg-orange-500 py-2 px-4 font-primary transition duration-200 hover:bg-orange-600"
          >
            Sign Up
          </button>
        </div>
        <div className="relative flex items-center justify-between lg:hidden">
          {!isMenuOpen ? (
            <RiMenu3Line
              className="cursor-pointer text-2xl"
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <RiCloseLine
              className="cursor-pointer text-2xl"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          {isMenuOpen && (
            <div className="absolute top-10 right-0 w-48 rounded bg-gray-800 py-10 px-8 font-semibold text-white shadow">
              <ul className="flex flex-col items-end justify-start gap-4">
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#home">Home</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#wgpt3">What is GPT?</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#features">Open AI</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#possibility">Case Studies</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#blog">Library</a>
                </li>
              </ul>
              <div className="mt-4 flex flex-col items-end justify-start gap-4 md:hidden">
                <a
                  href="#home"
                  className="transition duration-200 hover:-translate-y-1"
                >
                  Sign In
                </a>
                <button
                  type="button"
                  className="rounded bg-orange-500 py-2 px-4 font-primary transition duration-200 hover:bg-orange-600"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
