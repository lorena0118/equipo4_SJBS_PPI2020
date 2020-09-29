import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navigation from "./Navigation";

const MiCuenta = () => {
  return (
    <div className="container">
      <Navigation/>
      <br />
      <center>
        <img
          src="https://image.flaticon.com/icons/png/512/16/16363.png"
          width="110px"
        />
        <h5>Yhojan Osorio Aguirre</h5>
      </center>
      <br />
      <center>
        
        <a href="/Calendario">
        <button type="button" class="btn btn-primary">
          Calendario
        </button>
        </a>
        <a href="/ConfigCuenta">
        <button type="button" class="btn btn-secondary">
          Configuraciones
        </button>
        </a>
        <button type="button" class="btn btn-success">
          Salir
        </button>
      </center>
      <br/> <br/>
      <center><h6>Elementos guardados</h6></center>
      <div className="card mb-3">
        <img
          src="https://i.blogs.es/fd2c43/1366_2000---2019-11-25t112736.723/450_1000.jpg"
          widht="100%"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MiCuenta);