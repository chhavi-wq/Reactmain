import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar=()=>{
    return (
        <>
             <div>
                 <ul className="flex justify-around bg">
                <Link to="/"><li>Home </li></Link>
                <Link to="/service"><li>Service</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </>

       
    )
}
export default Navbar;