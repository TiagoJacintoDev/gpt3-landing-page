import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container mx-auto flex w-full items-center justify-between py-8 px-5 text-white">
      <div className="flex items-center">
        <img
          loading="lazy"
          src={logo}
          alt="logo"
          className="mr-12 w-16 cursor-pointer"
        />
        <ul className="hidden items-center gap-6 text-lg font-medium lg:flex">
          <li>
            <Link
              offset={-30}
              smooth
              to="#home"
              className="cursor-pointer hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              offset={-30}
              to="wgpt3"
              smooth
              className="cursor-pointer hover:text-gray-200"
            >
              What is GPT?
            </Link>
          </li>
          <li>
            <Link
              offset={-30}
              smooth
              to="features"
              className="cursor-pointer hover:text-gray-200"
            >
              Open AI
            </Link>
          </li>
          <li>
            <Link
              offset={-30}
              smooth
              to="possibility"
              className="cursor-pointer hover:text-gray-200"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              offset={-30}
              smooth
              to="blog"
              className="cursor-pointer hover:text-gray-200"
            >
              Library
            </Link>
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
                  <Link
                    offset={-30}
                    className="cursor-pointer"
                    smooth
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <Link
                    offset={-30}
                    className="cursor-pointer"
                    smooth
                    to="wgpt3"
                  >
                    What is GPT?
                  </Link>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <Link
                    offset={-30}
                    smooth
                    className="cursor-pointer"
                    to="features"
                  >
                    Open AI
                  </Link>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <Link
                    offset={-30}
                    className="cursor-pointer"
                    smooth
                    to="possibility"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <Link
                    offset={-30}
                    className="cursor-pointer"
                    to="blog"
                    smooth
                  >
                    Library
                  </Link>
                </li>
              </ul>
              <div className="mt-4 flex flex-col items-end justify-start gap-4 md:hidden">
                <a className="transition duration-200 hover:-translate-y-1">
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
