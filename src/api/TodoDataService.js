import axios from "axios";

class TodoDataService {
  retrieveAllTodos(name) {
    // console.log("retrieve todos");
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }

  deleteTodo(name, id) {
    // console.log("retrieve todos");
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }
}

export default new TodoDataService();
