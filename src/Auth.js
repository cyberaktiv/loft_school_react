import React, { Component } from "react";
import { authorizeUser } from "./AuthorizeApi";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    errorAuth: false,
    isAuthorized: false
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    if (email !== "student@loftschool.ru" && password !== "123") {
      this.setState({ errorAuth: true });
      this.setState({ isAuthorized: false });
    } else {
      this.setState({ errorAuth: false });
      this.setState({ isAuthorized: true });
    }
    authorizeUser(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;

    if (name === "email") {
      this.setState({ email: value });
    }

    if (name === "password") {
      this.setState({ password: value });
    }
  };

  render() {
    const { errorAuth, isAuthorized } = this.state,
      error = errorAuth ? (
        <p className="error">Неверный пароль и/или почта.</p>
      ) : null;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div>
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="email"
          />
          <input
            onChange={this.handleChange}
            name="password"
            placeholder="password"
          />
          {error}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Auth;
