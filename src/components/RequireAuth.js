import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";

const RequireAuth = ({ currentUser }) => {
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
