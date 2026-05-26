import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser);
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  const cartitem=JSON.parse(localStorage.getItem("cart"))
  console.log("cartttttt",cartitem)
  const count=cartitem.length
  console.log("counttttt",count)
  return (
    <>
    <nav className="sticky top-4 mx-6 text-black-400 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg">
      <ul className="flex items-center justify-between px-8 py-4 text-black">

        <div className="flex gap-6 font-medium">
          <Link to="/">
            <li className="hover:text-blue-300 transition">
              Home
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-blue-300 transition">
              Contact
            </li>
          </Link>

          <Link to="/shop">
            <li className="hover:text-blue-300 transition">
              Shop
            </li>
          </Link>

          <Link to="/effect">
            <li className="hover:text-blue-300 transition">
              Effect
            </li>
          </Link>

          <Link to="/api">
            <li className="hover:text-blue-300 transition">
              Api
            </li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-blue-300 transition">
              Cart {count}
            </li>
          </Link>
        </div>

        <div className="flex items-center gap-5">
           {currentUser ?(
         <li
            onClick={handleLogout}
            className="cursor-pointer hover:text-red-300 transition font-medium"
          >
            Logout
          </li>
           )
            :(
            <Link to="/login">
            <li className="hover:text-green-300 transition font-medium">
              Login
            </li>
          </Link>
          
            )}
          <li className="text-3xl cursor-pointer hover:scale-110 transition">
            <FaUserCircle />
          </li>
        </div>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;