import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import shoppy from "../assets/jshopyfinal.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice.js";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.value);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex w-full h-[80px] text-white justify-between items-center p-5   fixed top-0 left-0 right-0 z-50 bg-[#FCF1D9] sm:bg-white">
      <div className="w-[150px]">
        <img className="w-full" src={shoppy} alt="Shoppy Logo" />
      </div>

      <div className="hidden md:flex">
        <ul className="flex gap-10 bg-white border-0 rounded-4xl px-6 py-3 text-black shadow-lg items-center">
          <NavLink to="/">
            <li className="cursor-pointer hover:text-gray-600">Home</li>
          </NavLink>

          <NavLink to={isAuthenticated ? "products" : "login"}>
            <li className="cursor-pointer hover:text-gray-600">Products</li>
          </NavLink>

          {isAuthenticated ? (
            <Link to="/">
              <li
                className="cursor-pointer hover:text-gray-600"
                onClick={handleLogout}
              >
                Logout
              </li>
            </Link>
          ) : (
            <NavLink to="/login">
              <li className="cursor-pointer hover:text-gray-600">Login</li>
            </NavLink>
          )}

          <li>
            <input
              className="outline-none  border-gray-950 shadow-md shadow-gray-400 active:scale-90 transition-all   px-2 py-1 rounded-3xl"
              type="search"
              placeholder="Search..."
            />
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <div className="relative">
          <p className="text-black absolute right-0 top-[-16px] left-8">
            {cartCount.length}
          </p>
          <NavLink to="/cart">
            <button className=" transition-all active:scale-95">
              <IoMdCart style={{ color: "black", fontSize: "32px" }} />
            </button>
          </NavLink>
        </div>
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md text-black flex flex-col items-center gap-6 py-6 md:hidden">
          <ul className="flex flex-col gap-6 text-lg">
            <NavLink to="/">
              <li className="cursor-pointer hover:text-gray-600">Home</li>
            </NavLink>
            <NavLink to="/products">
              <li className="cursor-pointer hover:text-gray-600">Products</li>
            </NavLink>
            <NavLink to="/login">
              <li className="cursor-pointer hover:text-gray-600">Login</li>
            </NavLink>
            <li>
              <input
                className="outline-none border px-2 py-1 rounded-md w-40"
                type="search"
                placeholder="Search..."
              />
            </li>
          </ul>
          <div className="relative">
            <p className="text-black absolute right-0 top-[-16px] left-8">3</p>
            <NavLink to="/cart">
              <button className=" transition-all active:scale-95">
                <IoMdCart style={{ color: "black", fontSize: "32px" }} />
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
