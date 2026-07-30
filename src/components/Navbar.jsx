import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import  { ThemeContext } from "../ThemeContext.jsx"

const Navbar = () => {
  const navigate = useNavigate();
const { darkMode, toggleTheme } = useContext(ThemeContext);
const[visible,setVisible] = useState(false);
  // Get current user safely
  const token = localStorage.getItem("token");
 const [users, setUsers] = useState([]);
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
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
    <nav className="fixed top-4 left-0 right-0 mx-6 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-lg shadow-lg z-50">
  <ul className="flex items-center justify-between px-8 py-4 text-black">

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

            <li
        onClick={() => setVisible(!visible)}
        className="text-3xl relative cursor-pointer hover:scale-110 transition list-none">
        <FaUserCircle />
        </li>
        {visible && (
          <div className="absolute right-0 top-full bg-white  mt-10 shadow-lg">
          {users.map((user)=>
            <h1 key={user._id}>{user.name}</h1>
          )}
         </div>
        )}
      

          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;