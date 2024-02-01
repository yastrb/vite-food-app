import React from 'react';
import logo from "./../../assets/images/logo.png"

const Header = () => {
  return (
    <header>
      <div className=" relative container">
        <div>
          <img src={logo} alt="logo" />
          
        </div>
      </div>
    </header>
  )
}

export default Header


