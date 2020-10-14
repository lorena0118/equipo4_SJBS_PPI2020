import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";

const Temas = () => {
  return (
    <div className="container">
      <Navigation/>
      <br />
      <br />
      <br />
      <div className="row">
        <Link className="nav-link" to="/MetodosAnticonceptivos">
        <div className="col">
          <img
            src="../img/MetodosAnticonceptivos.png"
            width="100%"
            height="100%"
          />
        </div>
        </Link>
        <Link className="nav-link" to="/Ets">
        <div className="col">
          <img
            src="../img/ETS.png"
            width="100%"
            height="100%"
          />
        </div>
        </Link>
        
        <Link className="nav-link" to="/Embarazo">
        <div className="col">
          <img
            src="../img/Embarazo.png"
            width="100%"
            height="100%"
          />
        </div>
        </Link>
        <Link className="nav-link" to="/">
        <div className="col">
          <img
            src="../img/lineas atencion.png"
            width="100%"
            height="auto"
          />
        </div>
        </Link>
      </div>
    </div>
  );
};
export default withRouter(Temas)