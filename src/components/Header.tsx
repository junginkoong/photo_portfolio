import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300 flex justify-between items-center px-6 py-4">
      {/* Logo Box */}
      <div className="w-12 h-12 bg-black text-white font-bold flex items-center justify-center text-lg">
        T&B
      </div>
      {/* Nav */}
      <nav className="text-xs font-bold uppercase tracking-wider space-x-6">
        <a href="#">Home</a>
        <a href="#">Prints</a>
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
