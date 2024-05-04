import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black fixed top-0 w-full z-10">
        <div className="flex justify-between items-center px-16 py-4">
          <div>
            <Link to="/" className="font-bold text-white">
              LOGO
            </Link>
          </div>
          <ul className="flex gap-10 text-xl">
            <li>
              <Link to="/" className="hover:text-green-400 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/E-Banking" className="hover:text-green-400 text-white">
                E-Banking
              </Link>
            </li>
            <li>
              <Link to="/Green_Investment" className="hover:text-green-400 text-white">
                Green Investment
              </Link>
            </li>
            <li>
              <Link to="/CreditHub" className="hover:text-green-400 text-white">
                Credit Hub
              </Link>
            </li>
            <li>
              <Link to="/Impact" className="hover:text-green-400 text-white">
                Impact
              </Link>
            </li>
            <li>
              <Link to="/CarbonCoin" className="hover:text-green-400 text-white">
                Carbon Offset
              </Link>
            </li>
            <li>
              <Link to="/Login" className="hover:text-green-400 text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/Signup" className="hover:text-green-400 text-white">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
