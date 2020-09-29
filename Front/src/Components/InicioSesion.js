import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";

const InicioSesion = (props) => {
const {history} = props;
  return (
    <div>
    <div className="container">
      <center><h2>Sexubicate</h2>
      <h4>Ingresa</h4>
      <p>
        Recuerda llenar <code>todos</code> los datos.
      </p>
      <form action="/action_page.php" className="was-validated">
        <div className="form-group">
          <label for="uname">Correo</label>
          <input
            type="text"
            className="form-control"
            id="uname"
            placeholder="Enter username"
            name="uname"
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">Por favor completar este campo</div>
        </div>
        <div className="form-group">
          <label for="pwd">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">Por favor completar este campo</div>
        </div>
        <br/>
        <button
          type="submit" 
          className="btn btn-primary"
          onClick={() => history.push("/Inicio")}

        >
          Submit
        </button>
-
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={() => history.goBack("/")}
        >
          back
        </button>
      </form>
      </center>
    </div>
    </div>
  );
};
export default withRouter(InicioSesion);