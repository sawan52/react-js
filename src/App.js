import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import Error from "./error/Error";
import Todos from "./todo/Todos";
import Header from "./nav/Header";
import Footer from "./nav/Footer";
import TodoComponent from "./todo/TodoComponent";
import withNavigation from "./login/withNavigation";
import withParams from "./login/withParams";
import AuthenticatedRoute from "./login/AuthenticatedRoute";

function App() {
  const LoginComponentWithNavigation = withNavigation(Login);
  // refreshing header on navigating to another component
  const HeaderComponentWithNavigation = withNavigation(Header);
  const TodosComponentWithNavigation = withNavigation(Todos);

  const HomeComponentWithParams = withParams(Home);
  const TodoComponentWithParamsAndNavigation = withParams(
    withNavigation(TodoComponent)
  );

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
            }/>
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <TodosComponentWithNavigation />
              </AuthenticatedRoute>
            }/>
          <Route
            path="/todos/:id"
            element={
              <AuthenticatedRoute>
                <TodoComponentWithParamsAndNavigation />
              </AuthenticatedRoute>
            }/>
          <Route
            path="/logout"
            element={
              <AuthenticatedRoute>
                <Logout />
              </AuthenticatedRoute>
            }/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
