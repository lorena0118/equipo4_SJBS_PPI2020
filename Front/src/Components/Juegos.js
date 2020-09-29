import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navigation from "./Navigation";

const Juegos = () => {
  return (
    <div class="container">
      <Navigation/>
      <br />
      <br />
      <center>
        <h1>Juegos</h1>
      </center>
      <br />
      <div class="row">
        <a href="/">
          <div class="col">
            <img src="./img/1.png" width="100%" height="100%" />
          </div>
        </a><br/>
        <a href="/JuegoEnfermedades">
          <div class="col">
        
            <img src="./img/2.png" width="100%" height="100%" />
          </div>
        </a><br/>
        <a href="/">
        <div class="col">
          <img src="./img/3.png" width="100%" height="100%" />
        </div>
        </a><br/>
        <a href="/">
        <div class="col">
          <img src="./img/4.png" width="100%" height="auto" />
        </div>
        </a><br/>
          
      </div>
    </div>
    
    
  );
};

export default withRouter(Juegos);