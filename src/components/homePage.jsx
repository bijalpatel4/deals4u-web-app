import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="searchForm">
        <div className="deals-text">
          <h1 style={{ fontFamily: "Gill Sans, sans-serif" }}>
            Search great deals near you
          </h1>
        </div>
        <form className="form-inline md-form form-sm active-cyan-2 mt-6">
          <input
            className="form-control form-control-lg mr-2 w-75"
            type="text"
            placeholder="Enter zip code.."
            aria-label="Search"
          />
          <Link to="/deals" className="btn btn-primary btn-lg ml-2">
            <i className="fa fa-search" /> Search
          </Link>
        </form>
      </div>
    );
  }
}

export default HomePage;
