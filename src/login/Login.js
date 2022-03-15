import React from "react";

function Login() {
  return (
    <div>
      Username: <input type="text" name="username" />
      <br />
      Password: <input type="password" name="password" />
      <br />
      <button>LogIn</button>
    </div>
  );
}

export default Login;
