import axios from "axios";

class HelloWebService {
  executedHelloService() {
    // console.log("hello web service");
    return axios.get("http://localhost:8080/hello");
  }

  executedHelloBeanService() {
    // console.log("hello bean web service");
    return axios.get("http://localhost:8080/hello-bean");
  }

  executedHelloPathVariableService(name) {
    // console.log("hello path variable web service");
    return axios.get(`http://localhost:8080/hello/${name}`);
  }
}

export default new HelloWebService();
