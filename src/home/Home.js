import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWebService from "../api/HelloWebService";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
    };
    this.callWebService = this.callWebService.bind(this);
    this.handleSuccessfullResponse = this.handleSuccessfullResponse.bind(this);
  }

  callWebService() {
    HelloWebService.executedHelloService().then((response) =>
      this.handleSuccessfullResponse(response)
    );
  }

  handleSuccessfullResponse(response) {
    this.setState({ msg: response.data });
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.params.name}. You can manage your TODOS
          <Link to="/todos">here</Link>.
        </div>
        <div className="container">
          Click below button to see magic!!
          <br />
          <button onClick={this.callWebService}>Magic</button>
        </div>
        <br />
        <div className="container">{this.state.msg}</div>
      </div>
    );
  }
}

export default Home;
