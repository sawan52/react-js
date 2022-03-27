import axios from "axios";

class HelloWebService {
  executedHelloService() {
    // console.log("hello web service");
    return axios.get("http://localhost:8080/hello");
  }
}

export default new HelloWebService();
