import React from "react";
import Nav from "./Nav";
import {
  Navbar,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./../../assets/images/logo.png"
import { useEffect, useState } from "react";
import Buttons from "./Buttons";



const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className=" mx-auto max-w-screen-xl py-8 px-4 bg-transparent">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className=" flex w-[300px] p-[18px] rounded-md shadow-lg bg-[#FFF]">
          <input type="text" placeholder="search" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <Buttons/>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <MobileNav className=" mobilenav" open={openNav}>
        <div className="container mx-auto py-5 flex justify-center items-center">
          <Nav />
        </div>
      </MobileNav>

    </Navbar>
  );
}
export default Header