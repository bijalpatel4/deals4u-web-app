import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { stringLiteral } from "@babel/types";
class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div
        style={{
          margin: "5% auto"
        }}
      >
        <form
          style={{ width: "120%" }}
          onSubmit={this.handleSubmit}
          className="text-center bg-light border border-light p-5 m-5"
        >
          <h1 style={{ marginBottom: "10%" }}>Login</h1>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <div className="d-flex justify-content-around">
            <div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultLoginFormRemember"
                />
                <label
                  className="custom-control-label"
                  htmlFor="defaultLoginFormRemember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a href="/">Forgot password?</a>
            </div>
          </div>
          <button
            className="btn btn-info btn-block text-center my-4 p-2  "
            type="submit"
          >
            Log in
          </button>
          <p>
            Not a member?
            <a href="/">Register</a>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
