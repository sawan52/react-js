import axios from "axios";

class TodoDataService {
  retrieveAllTodos(name) {
    // console.log("retrieve todos");
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }
}

export default new TodoDataService();
