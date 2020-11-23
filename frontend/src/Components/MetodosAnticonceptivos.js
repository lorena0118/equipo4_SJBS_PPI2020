import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";

const MetodosAnticonceptivos = () => {
  return (
    <div>
      <Navigation/>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Métodos anticonceptivos</h1>
            <p>
            El método anticonceptivo es cualquier método usado para prevenir el embarazo. Otra forma de decir método anticonceptivo es "anticoncepción".

            Si tiene relaciones sexuales sin métodos anticonceptivos, existe la posibilidad de que pudiera quedar embarazada. Esto es así incluso si aún no ha empezado a tener períodos menstruales o si se está acercando a la menopausia .

            La única forma segura de prevenir el embarazo es no tener relaciones sexuales. Pero encontrar un buen método anticonceptivo que pueda utilizar cada vez puede ayudarla a evitar un embarazo no planeado.
            </p>
            
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Método natural</h2>
              <p>
                La planificación familiar natural (que también se llama método del calendario de fertilidad) puede ser eficaz si usted y su pareja son muy cuidadosos. Tendrá que mantener buenos registros para saber cuándo es fértil. Y durante las épocas que sea fértil, tendrá que evitar tener relaciones sexuales o usar un método de barrera.
              </p>
              <p>
                <Link to="metodosnaturales">
                  Ver más »
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Metodos Quirurjicos</h2>
              <p>
              Se realizan mediante una intervención quirúrgica en un centro sanitario. En la mujer se trata de la ligadura de las trompas y en el hombre se llama vasectomía y se interviene sobre dos conductos diferentes. Son métodos que NO PREVIENEN de las infecciones de transmisión sexual.
              </p>
              <p>
              <Link to="metodosquirurjicos">
                  Ver más »
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Métodos de barrera</h2>
              <p>
              incluyen condones (preservativos), diafragmas y esponjas. En general, estos no previenen el embarazo tan bien como los DIU o los métodos hormonales. Debe usar métodos de barrera cada vez que tenga relaciones sexuales.
              </p>
              <p>
              <Link to="metodosbarrera">
                  Ver más »
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-4">
              <h2>Métodos químicos</h2>
              <p>
              También llamados métodos hormonales. Incluyen las pastillas anticonceptivas, las inyecciones, el parche cutáneo y el anillo vaginal. Los métodos anticonceptivos que utilizan hormonas son muy buenos para prevenir el embarazo. Los implantes y los DIU hormonales también usan hormonas para impedir el embarazo.
              </p>
              <p>
              <Link to="metodosquimicos">
                  Ver más »
                </Link>
              </p>
            </div>
          </div>

          <hr />
        
      </main>
    </div>
  );
};
export default withRouter(MetodosAnticonceptivos);