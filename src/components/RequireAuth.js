import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";

const RequireAuth = ({ isAuthenticated }) => {
    const location = useLocation();

    return (
        isAuthenticated
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;