import React from "react";
import { Link } from "react-router-dom";
// import links from "../data/links";
import logo from "../images/new-deals.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import users from "../data/userData";

const NavBar = props => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <div className="my-0 mr-md-auto font-weight-normal">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {!props.currentUser && (
          <React.Fragment>
            <NavLink className="btn btn-outline-primary mr-2" to="/login">
              Log In
            </NavLink>
            <NavLink className="btn btn-outline-primary" to="/signup">
              Sign up
            </NavLink>
          </React.Fragment>
        )}

        {props.currentUser && (
          <React.Fragment>
            <NavLink className="btn btn-outline-primary mr-2" to="/profile">
              {props.currentUser.firstname}
            </NavLink>
            <NavLink className="btn btn-outline-primary" to="/logout">
              Log Out
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default NavBar;
