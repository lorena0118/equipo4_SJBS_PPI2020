import React, { useState } from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";


const InicioSesion = (props) => {
  const initalState = {
    name:"",
    correo: "",
    contraseña:""
  }
  const[usuario, setUsuario] = useState(initalState)

  function handlerChange(e){
    setUsuario({...usuario, [e.target.name] : e.target.value})
  }

  async function submitData(e){
    e.preventDefault()
    fetch('http://localhost:3001/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
    setUsuario("")
    window.location.href = 'http://localhost:3000/inicio'
  }

const {history} = props;
  return (
    <div>
    <div className="container">
      <center><h2>Sexubicate</h2>
      <h4>Ingresa</h4>
      <p>
        Recuerda llenar <code>todos</code> los datos.
      </p>
      <form  onSubmit={submitData} className="was-validated" >
        <div className="form-group">
          <label for="uname">nombre</label>
          <input
            type="text"
            className="form-control"
            id="uname"
            placeholder="Enter name"
            name="nombre"
            onChange={(e) => handlerChange(e)}
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">Por favor completar este campo</div>
        </div>
        <div className="form-group">
          <label for="uname">Correo</label>
          <input
            type="email"
            className="form-control"
            id="uname"
            placeholder="Enter email"
            name="correo"
            onChange={(e) => handlerChange(e)}
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
            name="contraseña"
            onChange={(e) => handlerChange(e)}
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">Por favor completar este campo</div>
        </div>
        <br/>
        
        <button
          type="submit" 
          className="btn btn-primary"
        >
          Ingresar
        </button>
        
      </form>
      </center>
    </div>
    </div>
  );
};
export default withRouter(InicioSesion);