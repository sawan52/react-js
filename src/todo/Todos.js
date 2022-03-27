import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import AuthenticationService from "../auth/AuthenticationService";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response);
      this.setState({ todos: response.data });
    });
  }

  /*const [todo, setTodo] = useState([{ id: 1, description: "Learn React" }]);*/

  render() {
    return (
      <div>
        <h1>Todos List:</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Todos;
