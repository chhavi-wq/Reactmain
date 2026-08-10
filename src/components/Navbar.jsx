import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import  { ThemeContext } from "../ThemeContext.jsx"
import {FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearCart } from "./redux/cartSlice";
const Navbar = () => {
  const navigate = useNavigate();
const { darkMode, toggleTheme } = useContext(ThemeContext);
  // Get current user safely
  const token = localStorage.getItem("token");
 const [users, setUsers] = useState([]);
 const dispatch = useDispatch();
 const [menuOpen, setMenuOpen] = useState(false);
  const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/admin/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setUsers(data.user);
        } else {
          toast.error(data.message);
        }
      } catch {
        toast.error("Server Error");
      }
    };
  // Get cart items safely
  const cartitem = JSON.parse(localStorage.getItem("cart")) || [];

  // Cart count
  const count = cartitem.length;

  // Logout function
 const handleLogout = () => {
    dispatch(clearCart());

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");

    navigate("/login");
};
  return (
    <>
    <nav className="fixed top-4 left-0 right-0 mx-3 sm:mx-6 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-lg shadow-lg z-50">
  <ul>
    <div className="items-center hidden lg:!px-10 lg:flex justify-between px-4 py-3 sm:px-8 sm:py-4 text-black">

          <div className="flex gap-6 font-medium">

            <Link to="/">
              <li className="hover:scale-110 duration-200 transition">
                Home
              </li>
            </Link>

            <Link to="/contact">
              <li className="hover:scale-110  duration-200 transition">
                Contact
              </li>
            </Link>

            <Link to="/shop">
              <li className="hover:scale-110 duration-200  transition">
                Shop
              </li>
            </Link>


            {/* <Link to="/effect">
              <li className="hover:text-blue-300 transition">
                Effect
              </li>
            </Link> */}

            {/* <Link to="/api">
              <li className="hover:text-blue-300 transition">
                Api
              </li>
            </Link> */}

            <Link to="/cart">
              <li className="hover:scale-110 duration-200 transition">
                Cart ({count})
              </li>
            </Link>
            <Link to="/orders">
              <li className="hover:scale-110 duration-200 transition">
                My Orders
              </li>
            </Link>
          </div>

          <div className="flex text-center items-center gap-5">
            <button
  onClick={toggleTheme}
  className="text-white text-2xl rounded-lg"
>
  {darkMode ? "☀️" : "🌙"}
</button>
              <Link to="/admin">
              <li className="cursor-pointer hover:scale-110 duration-200 transition font-medium list-none"
              >
                Admin
                </li>
              </Link>
            {token ? (
              <li
                onClick={handleLogout}
                className="cursor-pointer hover:scale-110 duration-200 transition font-medium list-none"
              >
                Logout
              </li>
            ) : (
              <Link to="/login">
                <li className="hover:scale-110 duration-200 transition font-medium">
                  Login
                </li>
              </Link>
            )}

          </div>
          </div>
          <div className="flex justify-between">

          <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="lg:hidden px-6 py-2 text-2xl"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

          <button className="lg:hidden px-6 py-2 text-2xl"
            onClick={toggleTheme}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        </ul>

{menuOpen && (

    <div className="lg:hidden px-6 pb-5">

      <div className="flex flex-col gap-4 font-medium border-t border-white/20 pt-4">

        <Link className="hover:bg-[#6B7D72] hover:text-white transition-duration-200 rounded-full px-3 py-2"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link className="hover:bg-[#6B7D72] hover:text-white transition-duration-200 rounded-full px-3 py-2"
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <Link className="hover:bg-[#6B7D72] hover:text-white transition-duration-200 rounded-full px-3 py-2"
          to="/shop"
          onClick={() => setMenuOpen(false)}
        >
          Shop
        </Link>

        <Link className="hover:bg-[#6B7D72] hover:text-white transition-duration-200 rounded-full px-3 py-2"
          to="/cart"
          onClick={() => setMenuOpen(false)}
        >
          Cart ({count})
        </Link>

        <Link className="hover:bg-[#6B7D72] hover:text-white transition-duration-200 rounded-full px-3 py-2"
          to="/orders"
          onClick={() => setMenuOpen(false)}
        >
          My Orders
        </Link>

        <Link className="hover:bg-[#6B7D72] hover:text-white transition-duration-200 rounded-full px-3 py-2"
          to="/admin"
          onClick={() => setMenuOpen(false)}
        >
          Admin
        </Link>

        {token ? (
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="hover:bg-[#6B7D72] text-left hover:text-white transition-duration-200 rounded-full px-3 py-2"
          >
            Logout
          </button>
        ) : (
          <Link className="hover:bg-[#6B7D72] hover:text-white transition-duration-200 rounded-full px-3 py-2"
            to="/login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        )}

      </div>

    </div>
)}

      </nav>
    </>
  );
};

export default Navbar;