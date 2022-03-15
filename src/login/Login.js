import React, { Component } from "react";

class Login extends Component {
  // define the initial state in constructor for username & password
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    // binding the function(event) to state...
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    // So whenever we made changes to username & password input fields the state gets updated
    // and when state gets updated the changes reflects back in element : This is like Two way data binding
  }

  // will work as two way data binding
  handleUsernameChange(event) {
    console.log(event.target.value);
    // update the state of username
    this.setState({ username: event.target.value });
  }

  // will work as two way data binding
  handlePasswordChange(event) {
    console.log(event.target.value);
    // update the state of password
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        Username:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <button>LogIn</button>
      </div>
    );
  }
}

export default Login;
