import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import links from "../data/links";
import logo from "../images/new-deals.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import users from "../data/userData";
import { connect } from "react-redux";
import { getNumbers } from "../client/action/getAction";

const NavBar = props => {
  console.log(props.basketProps.basketNumbers);

  useEffect(() => {
    getNumbers();
  }, []);

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
            <NavLink className="btn btn-outline-primary mr-2" to="/signup">
              Sign up
            </NavLink>
            <NavLink className="btn btn-primary" to="/cart">
              Cart
              <span className="cartNumbers">
                {props.basketProps.basketNumbers}
              </span>
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

const mapStoreToProps = state => ({
  basketProps: state.basketState
});
export default connect(mapStoreToProps, { getNumbers })(NavBar);
