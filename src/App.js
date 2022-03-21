import "./App.css";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import withNavigation from "./login/withNavigation";

function App() {
  const LoginComponentWithNavigation = withNavigation(Login);

  return (
    <div className="TodoApp">
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponentWithNavigation />} />
          <Route path="/login" element={<LoginComponentWithNavigation />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
