import React from "react";
import {withRouter} from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const MetodosNaturales = () => {
  return (
<div className="container">
<Navigation/>
      <center><h1>Metodos naturales</h1></center>
      <br/>
      <center><h3>¿Que es?</h3></center>
      <br/>

      <hp> 
      Durante el ciclo menstrual, hay aproximadamente 6 
      días en los que puedes quedar embarazada. Se le denomina
       período fértil.
     </hp>

     <br/>
     <br/>
<center><h3>¿Como usarlo?</h3></center>
<hp> 
Para predecir cuál será el primer día fértil (cuando 
puedes quedar embarazada) en tu ciclo actual, haz lo siguiente:
 Busca el ciclo más corto en tus registros anteriores. Réstale 18 al
número total de días de ese ciclo. Cuenta esa cantidad de días desde 
el día 1 de tu ciclo menstrual actual y marca ese día con una X.
     </hp>

<br/><br/>

     <center><img className="imagen" src="./img/CALENDARIO.PNG"/></center>

<br/>
</div>
    );
  };
  
  export default withRouter(MetodosNaturales);