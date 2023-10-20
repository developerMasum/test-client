import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-black text-xl">
            Appex
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:underline"
          >
            Menu
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" className="hover:underline text-black">
                Home
              </Link>
              <Link to="/products" className="hover:underline text-black">
                Add Products
              </Link>
              <Link to="/my-cart" className="hover:underline text-black">
                My Cart
              </Link>
              <Link to="/About" className="hover:underline text-black">
                About
              </Link>
            </div>
          </div>
        )}

        <div className="hidden md:flex justify-center space-x-4">
          <Link to="/" className="hover:underline text-black">
            Home
          </Link>
          <Link to="/add-product" className="hover:underline text-black">
            Add Products
          </Link>
          <Link to="/my-cart" className="hover:underline text-black">
            My Cart
          </Link>
          <Link to="/About" className="hover:underline text-black">
            About
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
          <button className="text-black hover:underline">Button</button>
          <img
            src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full ml-2"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
