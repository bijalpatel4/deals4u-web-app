import React, { Component } from "react";
import "./App.css";
//import { directive } from "@babel/types";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
//import Deals from "./components/deal";
import HomePage from "./components/homePage";
import DealsPage from "./components/dealsPage";
import DealDetail from "./components/dealsDetail";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container center">
          <Switch>
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/deals/:id" component={DealDetail} />
            <Route path="/deals" component={DealsPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
        {/* <DealsPage deals={this.state.deals} onViewDeal={this.handleViewDeal} /> */}
      </React.Fragment>
    );
  }
}

export default App;
