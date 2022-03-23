import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Welcome!</h1>
      <div className="container">
        Welcome {props.params.name}. You can manage your TODOS{" "}
        <Link to="/todos">here</Link>.
      </div>
    </div>
  );
}

export default Home;
