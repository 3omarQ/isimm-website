import React from "react";
import "./Authau.css";
import Login from "./Login";
import { Card } from "react-bootstrap";

  

function Auth() {
  return (
    <div className="login-page">
      <header className="height-75">
        
      </header>
      <br/>
      <div className="container pb-4">
        <div className="row justify-content-center">
          <Login/>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Auth;
