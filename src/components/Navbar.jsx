import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SearchContext } from "../SearchProvider";

const Navbar=()=>{
    const {search,setSearch}=useContext(SearchContext)
    return (
        <>
             <div>
                 <ul className="flex justify-around bg">
                <Link to="/"><li>Home </li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/test"><li>Test</li></Link>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className="border" type="search"  placeholder="search....."/>
                <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </>

       
    )
}
export default Navbar;