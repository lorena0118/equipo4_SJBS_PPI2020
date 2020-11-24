import React from "react";
import {withRouter} from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const MetodosBarrera = () => {
  return (
    <div className="container">
      <Navigation/>
      
      <center> <h1 >Metodos de barrera </h1>  </center>
     
      <br/>

     <center><h3 >Anillo hormonal</h3></center>

     <hp> 
Es un anillo blando y flexible. Las hormonas presentes en el 
anillo ayudan a prevenir un embarazo. Se coloca en la vagina,
donde libera lentamente hormonas a través de la pared vaginal
 hacia el flujo de sangre.

     </hp>

     <br/>
     
<center><img className="imagen" src="./img/AnilloHormonal.PNG"/></center>

<br/>

<center><h3 >Parche</h3></center>

     <hp> 
Se pone en algunas partes de tu cuerpo, donde libera hormonas
 que se absorben a través de la piel para prevenir embarazos.
  El parche también tiene muchos otros beneficios para la salud.
      </hp>

      <br/>

<center><img className="imagen" src="./img/Parche.PNG" /></center>

<br/>

<center><h3>DIU/ DISPOSITIVO INTRAUTERINO</h3></center>

        <hp> 
es un pequeño dispositivo que se coloca en el útero para evitar 
embarazos. Es duradero, reversible y uno de los métodos anticonceptivos 
más eficaces que existen.
        </hp>

        <br/>

        <center><img  className="imagen" src="./img/DispositivoUterino.PNG"  /></center>
       
        <br/>

        <center><h3  >Condón masculino</h3></center>

       <hp> 
El condón, uno de los métodos anticonceptivos más populares,
es una forma simple y barata de prevenir embarazos no planeados
y ETS. El condón actúa capturando los espermatozoides a medida
que éstos se liberan e impidiendo que entren a la vagina.
       </hp>

    <br/>  

    <center><img  className="imagen" src="./img/CondonMasculino.PNG"  /></center>
   
    <br/>  
    
    <center><h3 >Condón femenino</h3></center>

        <hp> 
Lo práctico del condón masculino que “simplemente se pone” 
es comparable a la técnica del condón femenino que “simplemente se pone”
 y los resultados son idénticos. Independientemente de quién esté usando
  el condón, hay una delgada funda de poliuretano que crea una barrera entre 
  el lugar de donde vienen los espermatozoides y el lugar al cual quieren llegar.
       </hp>

<br/> 

<center><img  className="imagen" src="./img/CondonFemenino.PNG"  /></center>
   
   
<br/><br/>
      </div>
  );
};

export default withRouter(MetodosBarrera);