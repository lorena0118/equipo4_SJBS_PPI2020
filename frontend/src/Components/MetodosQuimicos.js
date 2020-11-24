import React from "react";
import {withRouter} from "react-router-dom";
import Navigation from "./Navigation";

const MetodosQuimicos = () => {
  return (
    <div>
      <Navigation/>
      
      <div className="container"> 
        <br />
        <h1>Metodos quimicos</h1>
        <br/>

        <h3>Jadelle</h3>
        <br/>

        <hp> 
            -Jadelle 2 barritas que previenen embarazos no planeados durante 5 años
          <p/>-Sino-implant 2 barritas que previenen embarazos no planeados durante 4 años<p/>
            -Implanon 1 barrita que previene embarazos no planeados durante 3 años<p/>

            El implante es una barrita delgada, blanda y flexible del tamaño de un fósforo. Se inserta bajo la piel de tu brazo.<p/>
            Las barritas liberan lentamente dosis bajas de una hormona parecida a las que produce tu cuerpo.<p/>
            Funciona haciendo que el moco del cuello uterino sea tan espeso que los espermatozoides no lo puedan atravesar.
        </hp>

        <br/>
        <br/>

        <img className="imagen" src="../img/JADELLE.PNG"  alt=""/>

        <br/>

        <h1>Inyección Anticonceptiva.</h1>
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
        
        <img
          src="https://revistas.elheraldo.co/sites/default/files/styles/640x360/public/2013/10/16/articulo/84278-95417515.jpg?itok=x3yqqcRP"
          width="350px" alt=""
        />
      
        <br/><br/><br/>
      

        <h1>Pildoras Anticonceptivas.</h1>
        <hp>Las píldoras anticonceptivas son píldoras que se toman todos los días y contienen hormonas que modifican la manera en la que funciona el organismo y previenen los embarazos. Ya que las hormonas son sustancias químicas que controlan el funcionamiento de los órganos del cuerpo.</hp>
            
            <br/><br/><br/><br/>
        <img
          src="https://ichef.bbci.co.uk/news/410/cpsprodpb/E89F/production/_99115595_1.jpg"
          width="350px" alt=""
        />
        <br/><br/><br/><br/>
        <h1>VIDEOS</h1>
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