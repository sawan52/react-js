import React from "react";
import AuthenticationService from "../auth/AuthenticationService";
import { Navigate } from "react-router-dom";

function AuthenticatedRoute(props) {
  if (AuthenticationService.isUserLoggedIn()) {
    return { ...props.children };
  } else {
    return <Navigate to="/login" />;
  }
}

export default AuthenticatedRoute;
