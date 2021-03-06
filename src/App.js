import React, { Component } from "react";
import "./App.css";
//import { directive } from "@babel/types";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
//import Deals from "./components/deal";
import DealsPage from "./components/dealsPage";
import DealDetail from "./components/dealsDetail";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";
import Logout from "./components/logout";
import DealsSearchForm from "./components/dealsSearchForm";

class App extends Component {
  state = {};

  componentDidMount() {
    if (localStorage.getItem("user") != null) {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      this.setState({ currentUser });
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar currentUser={this.state.currentUser} />
        <div className="container center">
          <Switch>
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/deals/:id" component={DealDetail} />
            <Route path="/searchdeals/:zipcode" component={DealsPage} />
            <Route path="/" component={DealsSearchForm} />
          </Switch>
        </div>
        {/* <DealsPage deals={this.state.deals} onViewDeal={this.handleViewDeal} /> */}
      </React.Fragment>
    );
  }
}

export default App;
