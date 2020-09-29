import React from "react";
import {Link, withRouter} from "react-router-dom";
import BotonBack from "./BotonBack";

const ConfigCuenta = () => {
  return (
    <div>
      
  <BotonBack/>    
  <div className="container">
      <br />
      <div className="row">
        <div className="col">
          {" "}

          <br />
      <center>
        <h1> Configuración </h1>
      </center>
          <center>
            <img src="https://thumbs.dreamstime.com/b/corrija-la-l%C3%ADnea-de-usuario-icono-muestra-masculina-del-perfil-vector-131350026.jpg" width="50%" height="100%" />
          </center>
        </div>
        <div className="container">

        <center><nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          Nombre
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Apodo
        </li>
      </ol>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          Email
        </li>
      </ol>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          Nacimiento DD/MM/AÑO
        </li>
      </ol>
    </nav></center>
    </div>
    
        <div className="w-100">
          <h6>Cambiar contraseña: </h6>
          <p></p>
        </div>
      </div>
    </div>
    <div>   
    <nav aria-label="breadcrumb">
      <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          Nueva contraseña
        </li>
      </ol>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page" type="Textbox">
          Confirmar contraseña
        </li>
      </ol>
      </div>
    </nav>
    </div>   
    <br/>
    <div className="dropdown">
  <center><button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Notificaciones
  </button>
  
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Activar</a>
    <a className="dropdown-item" href="/">Desactivar</a>
    </div>
    </center>
    <br/><br/>

   </div>
   </div>
);
}; 
  export default withRouter(ConfigCuenta);