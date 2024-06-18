import React from "react";
import { Navigate,Route } from "react-router-dom";


const PrivateRoute=({Component})=>{
    const isAuthenticated=false;

    return isAuthenticated?Component:<Navigate to="/"></Navigate>
}
export default PrivateRoute;