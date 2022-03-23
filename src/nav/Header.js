import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthenticationService from "../service/AuthenticationService.js";

function Header(props) {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark todoNav">
        <div>
          <a href="http://localhost:3000/home/sawan52" className="navbar-brand">
            sawan52
          </a>
        </div>
        <ul className="navbar-nav">
          {isUserLoggedIn && (
            <li>
              <Link to="/home/sawan52" className="nav-link">
                Home
              </Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link to="/todos" className="nav-link">
                Todos
              </Link>
            </li>
          )}
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          {!isUserLoggedIn && (
            <li>
              <Link to="/login" className="nav-link">
                LogIn
              </Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link
                to="/logout"
                className="nav-link"
                onClick={AuthenticationService.logout}
              >
                LogOut
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
