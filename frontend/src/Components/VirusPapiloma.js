import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const VirusPapiloma = () => {
  return (
    <div className="container">
      <Navigation />

      <div className="container">
        <br />
        <h1 className="center"> Virus Papiloma </h1>
        <br />
        <img className="imagen" src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/vph_1.jpg" />
        <br />
        <br />
        <p>
        VPH significa “virus del papiloma humano”. Es la infección sexualmente transmitida más común que existe. Por lo general, el VPH es inofensivo y desaparece espontáneamente, pero algunos tipos pueden provocar verrugas genitales o cáncer.
        </p>
        <p>
        Existen más de 200 tipos de virus del papiloma humano (VPH). Alrededor de 40 tipos pueden infectar tu área genital (tu vulva, vagina, cuello uterino, recto, ano, pene y escroto) así como tu boca y garganta. Estos tipos de VPH se propagan durante el contacto sexual. (Otros tipos de VPH causan verrugas comunes, como las verrugas de las manos y las plantas de los pies, pero no se transmiten sexualmente)Siendo su medio de contacto el tipo sexual al estar en contacto con el area infectada por el papiloma humano.

        </p>
        <h3>
        Síntomas: pueden aparecer de igual forma en el cuerpo del hombre y en de la mujer.
        </h3>
        <ul>
<li> Verrugas genitales.</li>
<li>Verrugas normales.</li>
<li>Verrugas plantares.</li>
<li>Verrugas planas.</li>
<li>Cancer de varios tipos</li>
</ul>
          
        
        <h3>Tratamiento:</h3>
        <p>
        Es necesario extirpar cualquier lesión precancerosa. Las opciones incluyen la congelación (criocirugía), el láser, la extracción quirúrgica, el procedimiento de escisión electroquirúrgica con asa y la conización con bisturí frío.
        </p>
        <img className="imagen" src="https://laboratoriomartinez.com/wp-content/uploads/2019/02/prueba-virus-papiloma-humano-santamarta.jpg " />
      </div>
    </div>
  );
};
export default withRouter(VirusPapiloma);