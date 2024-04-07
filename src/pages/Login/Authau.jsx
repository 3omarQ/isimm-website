import React from "react";
import "./Authau.css";
import Login from "./Login";

  

function Auth() {
  return (
    <div className="login-page">
      <header className="height-75">
         
      </header>
      <div className="container pb-4">
        <div className="row justify-content-center">
          <Login/>
        </div>
      </div>
      <br/>
      <hr />
    </div>
  );
}

export default Auth;
