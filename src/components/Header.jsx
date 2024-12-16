import React, { useState } from "react";
import logo from '../assets/Images/logo.png';
import '../styles/header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header bg-[#FFF9F1] text-[#C89A3F] shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        
        <img className="logo cursor-pointer" src={logo} alt="Logo" />

        
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className="bi bi-list"></i> 
        </button>

        
        <nav className={`nav__menu ${showMenu ? "show" : ""}`}>
          <ul className="flex  text-sm">
            <li>HOME</li>
            <li>CHOCOLATES</li>
            <li>FLOWERS</li>
            <li>CAKES</li>
            <li>EVENTS</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>CONTACT</li>
            <li>CART (0)</li>
            <li className="search__icon cursor-pointer"><i className="bi bi-search"></i></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
