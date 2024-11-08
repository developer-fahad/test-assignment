import React, { useState } from "react";
import logo from "../assets/Frame.png";
import Button from "./Button";
import hero from "../assets/Rectangle 4.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div
      className="sticky top-0 lg:h-24 md:h-20 h-16 w-full z-[100]"
      // style={{
      //   backgroundImage: `url(${hero})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex h-full xl:max-w-[1320px] px-4 xl:px-0 mx-auto items-center justify-between py-5">
        <div className="flex items-center gap-1 text-white">
          <img className="w-7 h-7" src={logo} alt="" />
          <h2 className="font-poppins text-3xl">
            <span className="font-semibold text-3xl">Restau</span>rant
          </h2>
        </div>
        <div className="text-white hidden lg:block">
          <ul className="flex items-center gap-8 font-raleway font-medium text-[15px]">
            <li className="">
              <a href="">Home</a>
            </li>
            <li className="">
              <a href="">About</a>
            </li>
            <li className="">
              <a href="">Portfolio</a>
            </li>
            <li className="">
              <a href="">Clients</a>
            </li>
            <li className="">
              <a href="">Blog</a>
            </li>
            <li className="">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button text={"Book a table"} />
        </div>
        {/* Mobile Menu */}
        <button
          onClick={toggleMenu}
          className="text-white lg:hidden block focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Dropdown Menu with Animation */}
        <div
          className={`absolute  mt-2 w-48 p-4 bg-white right-4 shadow-lg rounded-lg transition-all duration-700 transform ${
            isOpen
              ? "opacity-100 translate-y-0 top-14"
              : "opacity-0 -translate-y-full top-0 pointer-events-none"
          }`}
        >
          <ul className="font-raleway font-medium text-[15px]">
            <li className="px-4 py-2">
              <a href="">Home</a>
            </li>
            <li className="px-4 py-2">
              <a href="">About</a>
            </li>
            <li className="px-4 py-2">
              <a href="">Portfolio</a>
            </li>
            <li className="px-4 py-2">
              <a href="">Clients</a>
            </li>
            <li className="px-4 py-2">
              <a href="">Blog</a>
            </li>
            <li className="px-4 py-2">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
