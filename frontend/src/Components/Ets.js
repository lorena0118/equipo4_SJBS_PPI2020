import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";


const Ets = () => {
  return (
  <div>
    <Navigation/>
    <div class="container">
        <h1 class="display-4"><center>Enfermedades de transmición sexual</center></h1>
        <p class="lead">
        <center>
          ¿Qué son? ¿Cuales son sus sintomas?
          </center>  
        </p>
    </div>
    <div className="container">
      <h2>¿Qué son?</h2>
      <p>
      Las enfermedades de transmisión sexual son infecciones que se contagian de una persona a otra usualmente durante el sexo vaginal, anal u oral. Son muy comunes, y muchas personas que las tienen no presentan síntomas. Sin tratamiento, las ETS pueden causar serios problemas de salud. La buena noticia es que hacerse la prueba no es complicado y que la mayoría de estas enfermedades son fáciles de tratar.
      </p>
      <br/>
      <h2>¿Cuales son las más comunes?</h2>
      <div className="container">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col">
              <center> Clamidia </center>
            </div>
            <div className="col">
              <center> Verrugas genitales</center>
            </div>
            <div className="w-100">
              <p></p>
              <hr />
              <hr />
            </div>
            <div className="col">
              <center> Gonorrea </center>
            </div>
            <div className="col">
              <center> Hepatitis B</center>
            </div>
            <div className="w-100">
              <p></p>
              <hr />
              <hr />
            </div>
            <div className="col">
              <center> Herpes </center>
            </div>
            <div className="col">
              <center> VIH - Sida</center>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="container"><br/>
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/1gbF4MjoOPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
      <br/>
      <h2>¿Cómo prevenirlas?</h2>
      <p>La única manera de prevenir realmente el contagio de una ETS es no tener sexo. Sin embargo, los preservativos pueden reducir significativamente el riesgo de ETS y VIH. También puede reducir su riesgo de ETS al limitar la cantidad de parejas sexuales durante su vida.</p>

    </div>  
  </div>
  )
}
export default withRouter(Ets);