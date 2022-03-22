import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Error from "./error/Error";
import Todos from "./todo/Todos";
import Header from "./nav/Header";
import Footer from "./nav/Footer";
import withNavigation from "./login/withNavigation";
import withParams from "./login/withParams";

function App() {
  const LoginComponentWithNavigation = withNavigation(Login);
  const HomeComponentWithParams = withParams(Home);

  return (
    <div className="TodoApp">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginComponentWithNavigation />} />
          <Route path="/login" element={<LoginComponentWithNavigation />} />
          <Route path="/home/:name" element={<HomeComponentWithParams />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
