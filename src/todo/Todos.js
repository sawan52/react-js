import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn to dance",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Visit India",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
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