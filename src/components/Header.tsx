import { NavLink } from "react-router-dom";
import logo from "../assets/others/logo1.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/galleries", label: "Galleries" },
  { to: "/collections", label: "Collections" },
  { to: "/gear", label: "Gear" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];


const Header = () => {
  return (
    <header className="bg-black border-b border-gray-300 flex justify-between items-center text-white" style={{ height: '100px' }}>
      {/* Logo Box */}
      <img src={logo} alt="Logo" className="h-full w-auto object-contain"/>
      {/* Nav */}
      <nav className="flex space-x-8 font-bold uppercase tracking-wide">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `group px-3 py-2 transition-colors duration-200 hover:bg-gray-400 flex flex-col items-center
              after:block after:w-12 after:h-0.5 after:rounded after:mt-1
              after:bg-white after:origin-center after:scale-x-0 after:transition-transform after:duration-300
              hover:after:scale-x-100` +
              (isActive ? " after:scale-x-100" : "")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      {/* Icons */}
      <div className="space-x-4">
        {/* <button className="text-xl">⛶</button>
        <button className="text-xl">☰</button> */}
      </div>
    </header>
  );
};

export default Header;
