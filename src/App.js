import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Error from "./error/Error";
import withNavigation from "./login/withNavigation";
import withParams from "./login/withParams";

function App() {
  const LoginComponentWithNavigation = withNavigation(Login);
  const HomeComponentWithParams = withParams(Home);

  return (
    <div className="TodoApp">
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponentWithNavigation />} />
          <Route path="/login" element={<LoginComponentWithNavigation />} />
          <Route path="/home/:name" element={<HomeComponentWithParams />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
