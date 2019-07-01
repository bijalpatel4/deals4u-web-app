import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("user");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
