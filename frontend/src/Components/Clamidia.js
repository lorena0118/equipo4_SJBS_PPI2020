import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const Clamidia = () => {
  return (
    <div className="container">
      <Navigation/>
      
        <div className="container">
          <br />
          <h1 className="center"> Clamidia </h1>
          
          <br />
         
          
          <img className="imagen" src="../img/CLAMIDIA.jpg"/>
          
          <br />
          <br />|
          <p>
            {" "}
            La clamidia es una enfermedad de transmisión sexual común. 
            Es causada por la bacteria Chlamydia trachomatis. 
            Puede infectar a hombres y mujeres. Las mujeres pueden contraer clamidia en el cuello del útero,
            el recto o la garganta.
          </p>
          <p>
          La clamidia afecta a las personas de todas las edades, pero es más común en las mujeres jóvenes. 
          Muchas de las personas con clamidia no desarrollan síntomas, aunque igualmente pueden infectar a otras mediante el contacto sexual. 
          Los síntomas incluyen dolor genital y secreciones de la vagina o el pene. Se recomienda la terapia antibiótica para el paciente afectado y sus parejas sexuales. 
          También deben hacerse controles médicos para comprobar que no haya otras infecciones de transmisión sexual.
          </p>
          
         
            <h3>
              Los síntomas de la clamidiasis pueden aparecer tanto en hombres como en mujeres e incluyen:
            </h3>
            <ul>
              <li>Dolor o ardor al orinar </li>
              <li>Dolor durante el sexo  </li>
              <li>Dolor en el bajo vientre </li>
              <li>Flujo vaginal anormal (puede ser amarillento y tener un olor fuerte) </li>
              <li>Sangrado entre periodos menstruales</li>
              <li>Pus o secreción lechosa o acuosa del pene </li>
              <li>Inflamación o sensibilidad en los testículos</li>
              <li> Dolor, secreción o sangrado alrededor del ano</li>
            </ul>

            <h3>
              Tratamiento:
               </h3>
              <p>
              La clamidia se trata con antibióticos. El tratamiento antibiótico recomendado es la doxiciclina, dos dosis diarias durante siete días o la azitromicina en una única dosis. 
              Se pueden utilizar otros medicamentos alternativos, pero no son tan eficaces como la azitromicina y la doxiciclina.

              </p> 
              

              
                <img className="imagen" src="../img/CLAMIDIA2.jfif"/>
             
      
          </div> 
      
        </div>
  );
};
export default withRouter(Clamidia);
