import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.callWebService = this.callWebService.bind(this);
  }

  callWebService() {
    console.log("webservice called");
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
      </div>
    );
  }
}

export default Home;
