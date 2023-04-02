import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { HamburgerIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";

import { Center } from "@chakra-ui/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav((p) => !p);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed">
      <div className="px-2 flex justify-between item-center w-full h-full m-auto">
        <div className="flex items-center border-solid border-2 w-full mr-4">
          <h2 className="">
            <img
              className="object-fill w-50 md:w-60 md:h-12 h-10 pr-5 rounded-xl"
              src={Logo}
            />
          </h2>
          <div className="flex w-full border-solid border-2 border-gray-300">
            <input className="rounded-md  w-full border-solid border-2 border-gray-300 "></input>
            <box className="bg-slate-100 rounded-md">
              <SearchIcon className="text-3xl" />
            </box>
          </div>
          <ul className="hidden text-1.4xl md:flex">
            <li className="border-b-2 border-zink-300 font-semibold"><Link to="/">Home</Link></li>
            <li className="border-b-2 border-zink-300 font-semibold">About</li>
            <li className="border-b-2 border-zink-300 font-semibold">Support</li>
            <li className="border-b-2 border-zink-300 font-semibold">
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="px-5 mr-2 h-10  my-5 text-center">SignIn</button>
          <button className="px-5 h-10  my-5">Login</button>
        </div>
        <div className="md:hidden my-auto mr-4" onClick={handleClick}>
          {!nav ? (
            <HamburgerIcon className="text-3xl" />
          ) : (
            <CloseIcon className="text-1.5xl mr-2 mb-1" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-7 flex flex-col justify-between"
        }
      >
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
          Home
        </li>
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
          About
        </li>
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
          Support
        </li>
        <li className="border-b-2 bordergray-300 text-center w-full text-2xl">
          Cart
        </li>
        <div className="flex flex-col my-4">
          <button className="mx-7 h-10 text-center my-3">Sign Up</button>
          <button className="mx-7 h-10 text-center">Login</button>
        </div>
        <li>
          <Link to="host/kids">Kids</Link>
        </li>
        <li>
          <Link to="/host/men_shoes">Mens Shooes</Link>
        </li>
        <li>
          <Link to="/host/men_clothes">Men Clothes</Link>
        </li>
        <li>
          <Link to="/host/men_watches">Men Watches</Link>
        </li>
        <li>
          <Link to="/host/sunglasses">Sunglasses</Link>
        </li>
        <li>
          <Link to="/host/women_clothes">Women</Link>
        </li>
        <li>
          <Link to="/host/women_watches">Women Watches</Link>
        </li>
      </ul>
      <ul className="hidden md:flex gap-4 justify-between px-3 py-2 bg-zinc-300 ">
        <li>
          <Link to="host/kids">Kids</Link>
        </li>
        <li>
          <Link to="/host/men_shoes">Mens Shooes</Link>
        </li>
        <li>
          <Link to="/host/men_clothes">Men Clothes</Link>
        </li>
        <li>
          <Link to="/host/men_watches">Men Watches</Link>
        </li>
        <li>
          <Link to="/host/sunglasses">Sunglasses</Link>
        </li>
        <li>
          <Link to="/host/women_clothes">Women</Link>
        </li>
        <li>
          <Link to="/host/women_watches">Women Watches</Link>
        </li>
      </ul>
      
    </div>
  
  );
};

export default Navbar;
