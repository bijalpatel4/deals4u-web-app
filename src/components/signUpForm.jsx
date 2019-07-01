import React, { Component } from "react";
import { register } from "../service/loginService";
import Input from "./input";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

class SignUpForm extends Component {
  state = {
    data: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      confirmpassword: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };
  validate = () => {
    const errors = {};
    const { data } = this.state;
    if (data.firstname.trim() === "")
      errors.firstname = "First Name is required";
    if (data.lastname.trim() === "") errors.lastname = "Last Name is required";
    if (data.username.trim() === "") errors.username = "Username is required";
    if (data.password.trim() === "") errors.password = "Password is required";
    if (data.confirmpassword.trim() === "")
      errors.confirmpassword = "Confirm Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  doSubmit = () => {
    register(this.state.data);
    localStorage.setItem("user", JSON.stringify(this.state.data));
    window.location = "/";
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    this.doSubmit();
  };
  validateProperty = ({ name, value }) => {
    if (name === "firstname") {
      if (value.trim() === "") return "First Name is required";
    }
    if (name === "lastname") {
      if (value.trim() === "") return "Last Name is required";
    }
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
    if (name === "confirmpassword") {
      if (value.trim() === "") return " Confirm Password is required";
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="h-75 signup-form bg-light border border-light p-5 m-5">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            {/* <div className="row"> */}
            <div className="col-xs-6">
              <Input
                name="firstname"
                value={data.firstname}
                onChange={this.handleChange}
                // error={errors.username}
              />
            </div>
            <div className="col-xs-6">
              <Input
                name="lastname"
                value={data.lastname}
                onChange={this.handleChange}
                // error={errors.username}
              />
            </div>
          </div>
          {/* </div> */}
          <div className="form-group">
            <Input
              name="username"
              value={data.username}
              onChange={this.handleChange}
              // error={errors.username}
            />
          </div>
          <div className="form-group">
            <Input
              name="password"
              value={data.password}
              onChange={this.handleChange}
              // error={errors.username}
            />
          </div>
          <div className="form-group">
            <Input
              name="confirmpassword"
              value={data.confirmpassword}
              onChange={this.handleChange}
              // error={errors.username}
            />
          </div>
          <div className="form-group">
            <label className="checkbox-inline">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
        <div className="hint-text">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
