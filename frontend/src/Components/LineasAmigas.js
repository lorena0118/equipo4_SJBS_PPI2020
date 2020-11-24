import React from "react";
import {withRouter} from "react-router-dom";
import Navigation from "./Navigation";


const LineasAmigas = () => {
  return (
  <div>
    <Navigation/>
    <div class="container">
        <h1 class="display-4"><center>Lineas Amigas</center></h1>
        <p class="lead">
        <center>
       
           
          </center>  
        </p>
        
    </div>
    <div className="container">
      <center><h2>Ministerio de Salud</h2></center>
      <p> 
      https://www.minsalud.gov.co/salud/publica/ssr/Paginas/home-salud-sexual.aspx
      </p>
      <br/>

      <center><img className="imagen" src="./img/MINISTERIO DE SALUD.PNG"/></center>

      <br/>

      <center> <h2>Profamilia</h2></center>
       <p> htpps/profamilia.org.co/

Linea gratuita nacional; 01 8000 110 900</p>

      <br/>
     
      <center><img className="imagen" src="./img/PROFAMILIA.PNG"/></center>


      <br/>
      <h2>Linea 123</h2>
      <p>LEs la linea telefonica que reune todos los numeros 
de seguridad y emergencias (Policia, Movilidad,
Bomberos, Gestion de Riesgos y Secretaria de la salud)
del distrito con el objetivo de garantizar una respuesta adecuada,
oportuna y efectiva. Esta linea esta habilitada las 24 horas todos los dias
de la semana, Se puede marcar desde un telfono movil o fijo.</p>
      
<br/>

<center><img className="imagen" src="./img/123.PNG"/></center>

<br/><br/>

    </div>  
  </div>
  )
}
export default withRouter(LineasAmigas);