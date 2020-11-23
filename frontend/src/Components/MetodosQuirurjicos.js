import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";
import  "../styles.css"

const MetodosQuirurjicos = () => {
  return (
<div className="container">

<Navigation/>
      
      <center><h1>Metodos Quirurjicos</h1></center>
      <br/>
      
     <br/>

     <center><h3>Cirugia Esterilizadora</h3></center>
     
     <br/>

     <hp> 
     es un procedimiento para evitar de manera permanente la reproducción.
      La cirugía en las mujeres se denomina ligadura de trompas. La cirugía
       en los hombres se denomina vasectomía.
     </hp>

     <br/>
     <br/>

     <img className="imagen" src="../img/CIRUGIAESTE.PNG"/>

     <br/>
     <br/>

</div>
  );
};

export default withRouter(MetodosQuirurjicos);