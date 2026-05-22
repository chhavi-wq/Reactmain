import { Navigate } from "react-router-dom"

const ProtectRouting=({children})=>{
    const user=JSON.parse(localStorage.getItem("currentUser"))
    if(!user){
        return <Navigate to="/login"/>
    }

    return children

}
export default ProtectRouting