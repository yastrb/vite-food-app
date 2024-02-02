// import React from 'react';
// import logo from "./../../assets/images/logo.png"

// const Header = () => {
//   return (
//     <header>
//       <div className=" relative container">
//         <div>
//           <img src={logo} alt="logo" />

//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header


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



const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className=" navbarch mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <Nav/>
          <div className="flex items-center gap-x-1">
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
export default Header