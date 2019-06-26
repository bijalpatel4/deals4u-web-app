import React, { Component } from "react";
import { Link } from "react-router-dom";
import links from "../data/links";
import logo from "../images/new-deals.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

class NavBar extends Component {
  state = {
    links: links
  };
  render() {
    // let linkMarkUp = this.state.links.map(link => (
    //   <li className="menu__list-item" key={link.id}>
    //     <a className="menu__link" href={link.link}>
    //       {link.lable}
    //     </a>
    //   </li>
    // ));
    return (
      // <nav className="menu">
      //   <h1 className="menu__logo">Deals4U</h1>
      //   <div className="menu__right">
      //     <ul className="menu__list">{linkMarkUp}</ul>
      //   </div>
      // </nav>
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <div className="my-0 mr-md-auto font-weight-normal">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <NavLink className="btn btn-outline-primary mr-2" to="/login">
            Log In
          </NavLink>
          <NavLink className="btn btn-outline-primary" to="/signup">
            Sign up
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
