import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const HepatitisB = () => {
  return (
    <div className="container">
      <Navigation />

      <div className="container">
        <br />
        <h1 className="center"> Hepatitis B </h1>
        <br />
        <img className="imagen" src="https://e.rpp-noticias.io/normal/2018/09/21/243124_681415.jpg" />
        <br />
        <br />
        <p>
        La hepatitis B es una infección hepática grave causada por el virus de la hepatitis B (VHB). Para algunas personas, la infección de la hepatitis B se vuelve crónica, lo que significa que dura más de seis meses. Tener hepatitis B crónica aumenta el riesgo de contraer insuficiencia hepática, cáncer de hígado o cirrosis, enfermedad que causa cicatrices permanentes en el hígado.
        </p>
        <p>
        La mayoría de los adultos infectados con hepatitis B se recupera por completo, incluso si los signos y síntomas son graves. Los bebés y niños son más propensos a contraer una infección crónica (duradera) de hepatitis B.
        La vacuna puede prevenir la hepatitis B, pero no existe cura si ya padeces la enfermedad. Si estás infectado, tomar ciertas precauciones puede prevenir el contagio del virus a otras personas.

        </p>
        <h3>
        Síntomas:
        </h3>
        <ul>
        <li>Dolor abdominal</li>
          <li>Orina oscura</li>
          <li>Fiebre</li>
          <li>Dolor articular</li>
          <li>Pérdida de apetito</li>
          <li>Náuseas y vómitos</li>
          <li>Debilidad y fatiga</li>
          <li>Pigmentación amarilla de la piel y la parte blanca del ojo</li>
        
          
        </ul>
        <h3>Tratamiento:</h3>
        <p>
        Medicamentos antivirales. 
Inyecciones de interferón. 
Trasplante de hígado.
Son los tratamientos que se dan para esta enfermedad que pueden ser simples pero a la vez delicados dependiendo de como este la enfermedad.
        </p>
        <img className="imagen" src="https://www.prensalibre.com/wp-content/uploads/2019/07/hepatitis-e-h%C3%ADgado-4.jpg?quality=82&w=760&h=430&crop=1 " />
      </div>
    </div>
  );
};
export default withRouter(HepatitisB);