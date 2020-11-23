import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";
import BotonBack from "./BotonBack";

const MetodosQuimicos = () => {
  return (
    <div>
      <Navigation/>
      <BotonBack/>
      <div className="container"> 
      <br />
      <center><h1>Inyección Anticonceptiva.</h1></center>
      <br/>
   
      
      <hp>

La inyección anticonceptiva es una inyección que se administra a una chica
 una vez cada tres meses para protegerla de posibles embarazos. 
 
</hp>
 
 <br/>
 <hp> Es una inyección que contiene hormonas, ya sea una progestina sola o una progestina y un estrógeno juntos, 
   y hace que tu cuerpo deje de liberar óvulos y que el moco del cérvix sea más espeso. 
   Necesitas que un profesional médico te ponga una inyección</hp>
            
            <br/><br/><br/><br/>
        
        <center><img
          src="https://revistas.elheraldo.co/sites/default/files/styles/640x360/public/2013/10/16/articulo/84278-95417515.jpg?itok=x3yqqcRP"
          width="350px"
        /></center>
      
      <br/><br/><br/>
      <br />

      <center><h1>Pildoras Anticonceptivas.</h1></center>
      <hp>Las píldoras anticonceptivas son píldoras que se toman todos los días y contienen hormonas que modifican la manera en la que funciona el organismo y previenen los embarazos. Ya que las hormonas son sustancias químicas que controlan el funcionamiento de los órganos del cuerpo.</hp>
            
            <br/><br/><br/><br/>
            <center><img
          src="https://ichef.bbci.co.uk/news/410/cpsprodpb/E89F/production/_99115595_1.jpg"
          width="350px"
        /></center>
       <br/><br/><br/><br/>
        <center><h1>VIDEOS</h1></center>
    </div>
    <div className= "container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aomj8gbo3yQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br/><br/><br/><br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/e0VYNwWeQTs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  
    </div>
  );
};

export default withRouter(MetodosQuimicos);