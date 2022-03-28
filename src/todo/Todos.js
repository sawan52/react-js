import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import AuthenticationService from "../auth/AuthenticationService";
import moment from "moment";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: "",
    };

    this.deleteTodoService = this.deleteTodoService.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateTodoService = this.updateTodoService.bind(this);
    this.addTodoService = this.addTodoService.bind(this);
  }

  deleteTodoService(id) {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({ message: `Todo with Id ${id} is deleted successfully!` });
      this.refreshTodos();
    });
  }

  updateTodoService(id){
    this.props.navigate(`/todos/${id}`)
  }

  addTodoService(){
    this.props.navigate(`/todos/-1`)
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
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
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td>{todo.done.toString()}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.updateTodoService(todo.id)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodoService(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="container">
            <button className="btn btn-success" onClick={this.addTodoService}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
