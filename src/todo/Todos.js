import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, description: "Learn to dance" },
        { id: 2, description: "Learn React" },
        { id: 3, description: "Visit India" },
      ],
    };
  }

  /*const [todo, setTodo] = useState([{ id: 1, description: "Learn React" }]);*/

  render() {
    return (
      <div>
        <h1>Todos List:</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todos;
