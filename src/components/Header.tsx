import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300 flex justify-between items-center px-1 py-1" style={{ height: '100px' }}>
      {/* Logo Box */}
      <img src={logo} alt="Logo" className="h-full w-auto object-contain"/>
      {/* Nav */}
      <nav className="text-lg font-bold uppercase tracking-wider space-x-6">
        <a href="#">Home</a>
        <a href="#">Journal</a>
        <a href="#">Collections</a>
        <a href="#">Portfolio</a>
        <a href="#">Gear</a>
        <a href="#">About</a>
      </nav>
      {/* Icons */}
      <div className="space-x-4">
        <button className="text-xl">⛶</button>
        <button className="text-xl">☰</button>
      </div>
    </header>
  );
};

export default Header;
