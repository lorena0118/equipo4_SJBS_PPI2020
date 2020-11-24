import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const Gonorrea = () => {
  return (
    <div className="container">
      <Navigation />

      <div className="container">
        <br />
        <h1 className="center"> Gonorrea </h1>
        <br />
        <img className="imagen" src="../img/GONORREA1.PNG" />
        <br />
        <br />
        <p>
        La gonorrea es una enfermedad, una infección, de trasmisión sexual muy común, que puede afectar a cualquier persona que mantengan relaciones sexuales, especialmente si no son seguras. Infecta por igual a hombres y mujeres y afecta a uretra, recto y garganta. En las mujeres también puede infectar el cuello uterino. Es muy común en jóvenes de 15 a 24 años y puede contraerse a través del sexo vaginal, oral o anal con una pareja infectada. Una mujer embarazada puede trasmitir la gonorrea a su bebé durante el parto.
        </p>
        <p>
        Las verrugas genitales afectan los tejidos húmedos del área genital. Pueden parecer pequeñas protuberancias de color carne o tener una apariencia de coliflor. En muchos casos, las verrugas son demasiado pequeñas para ser visibles. Algunas cepas del VPH genital pueden causar verrugas genitales, mientras que otras pueden causar cáncer. Las vacunas pueden ayudar a prevenir ciertas cepas del VPH genital.
        </p>
        <h3>
        Síntomas:
        </h3>
        <ul>
          <li>Es posible que algunos hombres con gonorrea no presenten ningún síntoma. Sin embargo, los hombres que presentan síntomas pueden tener:   </li>
          <li>- secreción de color blanco, amarillo o verde del pene</li>
          <li>sensación de ardor al orinar </li>
          <li>
          dolor o inflamación en los testículos (aunque esto es menos común).
          </li>
          <li>Las mujeres con gonorrea corren el riesgo de tener complicaciones graves por la infección, aun cuando no presenten ningún síntoma. Los síntomas en las mujeres pueden ser los siguientes:    </li>
          <li>dolor o sensación de ardor al orinar </li>
          <li>aumento de la secreción vaginal </li>
          <li>
          sangrado vaginal entre periodos.
          </li>
          <li>Las infecciones del recto pueden no causar síntomas tanto en los hombres como en las mujeres o pueden causarles los siguientes:</li>
          
          <li>secreciones </li>
          <li>picazón anal</li>
          <li>
          dolores
          </li>  
          <li>sangrado </li>
          <li>dolor al defecar.</li>
                
          
          </ul>
        <h3>¿Se puede curar?</h3>
        <p>
        Sí, la gonorrea se puede curar con el tratamiento correcto. Es importante que tome todos los medicamentos que su médico le recete para curar su infección. Los medicamentos contra la gonorrea no se deben compartir con nadie. Si bien los medicamentos detendrán la infección, no repararán ninguna lesión permanente que haya causado la enfermedad. Es cada vez más difícil tratar algunos casos de gonorrea debido a que las cepas de gonorrea resistentes a los medicamentos están aumentando. Si sus síntomas continúan por más de unos días después del tratamiento, debe regresar a su proveedor de atención médica para que le hagan otro chequeo.
        </p>
       
      </div>
    </div>
  );
};
export default withRouter(Gonorrea);