import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import Error from "./error/Error";
import Todos from "./todo/Todos";
import Header from "./nav/Header";
import Footer from "./nav/Footer";
import withNavigation from "./login/withNavigation";
import withParams from "./login/withParams";
import AuthenticatedRoute from "./login/AuthenticatedRoute";

function App() {
  const LoginComponentWithNavigation = withNavigation(Login);
  const HomeComponentWithParams = withParams(Home);
  // refreshing header on navigating to another component
  const HeaderComponentWithNavigation = withNavigation(Header);

  return (
    <div className="TodoApp">
      <Router>
        <HeaderComponentWithNavigation />
        <Routes>
          <Route path="/" element={<LoginComponentWithNavigation />} />
          <Route path="/login" element={<LoginComponentWithNavigation />} />
          <Route
            path="/home/:name"
            element={
              <AuthenticatedRoute>
                <HomeComponentWithParams />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <Todos />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <AuthenticatedRoute>
                <Logout />
              </AuthenticatedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
