import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import AuthenticationService from "../auth/AuthenticationService";

class TodoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
    };
  }

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUsername();
    let todo = values;
    if (this.state.id === -1) {
      TodoDataService.createTodo(username, todo).then(() =>
        this.props.navigate("/todos")
      );
    } else {
      TodoDataService.updateTodo(username, this.state.id, todo).then(() =>
        this.props.navigate("/todos")
      );
    }
  }

  render() {
    return <div>Todo Component for Id: {this.state.id}</div>;
  }
}

export default TodoComponent;
