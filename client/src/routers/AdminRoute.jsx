/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({children})=>{
    const token = localStorage.getItem("adminAuth");
    if(!token){
        return <Navigate to="/admin"/>
    }
    return children ? children : <Outlet />
    
}

export default AdminRoute;