import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const VihSida = () => {
  return (
    <div className="container">
      <Navigation />

      <div className="container">
        <br />
        <h1 className="center"> VIH/SIDA </h1>
        <br />
        <img className="imagen" src="https://lanuevachucuriestereo.com/wp-content/uploads/2017/12/vih-sida-thumbnail.jpg" />
        <br />
        <br />
        <p>
        El virus de inmunodeficiencia humana (VIH) es el virus que causa el sida. Cuando una persona se infecta con VIH, el virus ataca y debilita al sistema inmunitario. A medida que el sistema inmunitario se debilita, la persona está en riesgo de contraer infecciones y cánceres que pueden ser mortales. 
        </p>
        <p>
        Cuando esto sucede, la enfermedad se llama sida. Una vez que una persona tiene el virus, este permanece dentro del cuerpo de por vida pudiendo contactarse por medio de:
 <ul>
<li>Sangre</li>

<li>Semen y líquido preseminal</li> 

<li>Fluidos rectales </li>

<li>Fluidos vaginales</li>

<li>Leche materna</li>
</ul>
        </p>
        <h3>
        Síntomas: pueden aparecer de igual forma en el cuerpo del hombre y en de la mujer.
        </h3>
        <ul>
        <li>Dolor de garganta.</li>
        <li>Infecciones graves por hongos.</li>
        <li>Enfermedad pélvica inflamatoria crónica.</li>
        <li>Infecciones graves recurrentes.</li>
        <li>Cansancio persistente, mareos y aturdimiento.</li>
        <li>Dolores de cabeza.</li>
        <li>Pérdida repentina de peso.</li>
        
          
        </ul>
        <h3>Tratamiento:</h3>
        <p>
        se le puede llamar tratamiento antirretroviral (TAR). El TAR es una combinación de medicamentos contra el VIHque se debe tomar a diario. A todas las personas con infección por el VIH se les recomienda el TAR.
        </p>
        <img className="imagen" src="https://www.cordobabn.com/asset/zoomcrop,770,512,center,center//media/cordobabn/images/2015/07/15/sida.jpg " />
      </div>
    </div>
  );
};
export default withRouter(VihSida);