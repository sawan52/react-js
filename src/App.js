import "./App.css";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
