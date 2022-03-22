import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      Welcome to HOME Page {props.params.name}
      <p>
        You can manage your TODOS <Link to="/todos">here...</Link>
      </p>
    </div>
  );
}

export default Home;
