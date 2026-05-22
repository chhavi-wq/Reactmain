import {Link, useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SearchContext } from "../SearchProvider";
import { IoIosHome } from "react-icons/io";


const Navbar=()=>{
    const {search,setSearch}=useContext(SearchContext)
    const navigate=useNavigate()

    const handlelogout=()=>{
        localStorage.removeItem("currentUser")
        navigate("/login")
    }
    return (
        <>
             <div>
                 <ul className="flex justify-around bg">
                <Link to="/"><li><IoIosHome />Home </li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/test"><li>Test</li></Link>
                <li onClick={handlelogout}>Logout</li>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className="border" type="search"  placeholder="search....."/>
                <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </>
    )
}
export default Navbar;