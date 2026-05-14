import {Link} from "react-router-dom"
const Navbar=()=>{
    return (
        <>
        <ul className="flex justify-between">
        <Link to="/"><li>Home </li></Link>
        <Link to="/service"><li>Service</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
         </ul>
        </>
       
    )
}
export default Navbar;