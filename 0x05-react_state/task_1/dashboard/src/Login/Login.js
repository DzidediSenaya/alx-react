import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
      isLoggedIn: false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email, enableSubmit: email !== "" && this.state.password !== "" });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password, enableSubmit: this.state.email !== "" && password !== "" });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <p>Welcome!</p>
        ) : (
          <form onSubmit={this.handleLoginSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </label>
            <br />
            <input type="submit" value="Submit" disabled={!this.state.enableSubmit} />
          </form>
        )}
      </div>
    );
  }
}

export default Login;

