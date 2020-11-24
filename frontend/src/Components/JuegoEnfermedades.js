import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";

const JuegoEnfermedades = () => {
  return (
    
<div>
<Navigation/>

<center>
      <h1> ¡Enfermedades de transmicion sexual! </h1>
      
      <br/><br/>

      <div class="col">
          <img src="./img/KAHOOT.PNG" width="100%" height="100%" />
 </div>
 
 <br/><br/>

 <h3> Codigo = "****" </h3>
 
 <br/><br/>

 <button type="button" class="btn btn-outline-primary">¡Vamos a jugar!</button>
<button type="button" class="btn btn-outline-secondary">Atras</button>

<br/><br/>

<h3> Caja de comentarios:  </h3>

<br/><br/>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          ¡Danos recomendaciones!
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Dejanos tus disgustos :(
        </li>
      </ol>
    </nav>

    <br/><br/>
      </center>
</div>  
    
  )
}
export default withRouter(JuegoEnfermedades);