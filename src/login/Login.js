import React, { Component } from "react";
import AuthenticationService from "../service/AuthenticationService";

class Login extends Component {
  // define the initial state in constructor for username & password
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    // binding the function(event) to state...
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);

    // So whenever we made changes to username & password input fields the state gets updated
    // and when state gets updated the changes reflects back in element : This is like Two way data binding
  }

  // it will work as two way data binding
  handleChange(event) {
    // update the state of form fields
    this.setState({ [event.target.name]: event.target.value });
  }

  loginUser() {
    if (this.state.username === "sawan52" && this.state.password === "sawan52") {
      AuthenticationService.successfulLogin(this.state.username, this.state.password);
      this.props.navigate(`/home/${this.state.username}`, { replace: true });
      this.setState({ hasLoginFailed: false });
      this.setState({ showSuccessMessage: true });
    } else {
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    }
  }

  render() {
    return (
      
      <div>
        <h1>Log In</h1>
        <div className="container">
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>} 
          {this.state.showSuccessMessage && <div>Login Successfull</div>}
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <button className="btn btn-success" onClick={this.loginUser}>LogIn</button>
        </div>
      </div>
    );
  }
}

export default Login;
