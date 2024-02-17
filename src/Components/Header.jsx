import React from 'react'
import Logo from "../Logo.png";
const Header = () => {
  return (
    <>
      <header className="header1">
      <img src={Logo} alt="logo" />
        <h1>Google Keep </h1>
      </header>
    </>
  )
}

export default Header