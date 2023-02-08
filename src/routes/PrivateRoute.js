import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { email, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();

  if (email) {
    return children;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
