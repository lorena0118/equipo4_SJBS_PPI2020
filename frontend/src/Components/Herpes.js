import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles.css";

const Herpes = () => {
  return (
    <div className="container">
      <Navigation />

      <div className="container">
        <br />
        <h1 className="center"> Herpes </h1>
        <br />
        <img className="imagen" src="https://www.salud.mapfre.es/media/2016/07/Foto-2-1100x406.jpg" />
        <br />
        <br />
        <p>
        El herpes genital es una ETS causada por dos tipos de virus. Estos virus se llaman virus del herpes simple tipo 1 (VHS-1) y virus del herpes simple tipo 2 (VHS-2) o mejor conocidos como herpes genital y herpes oral.
        </p>
        <p>
        El herpes oral causado por el VHS-1 se puede transmitir de la boca a los genitales mediante las relaciones sexuales orales. Esta es la razón por la cual algunos casos de herpes genital son causados por el VHS-1.

Sea cualquiera de las 2 formas de herpes se transmite por el contacto sea oral (Saliva) o genital (Aparatos reprodcutores)

        </p>
        <h3>
        Síntomas:
        </h3>
        <ul>
        <li>Dolor o picazón. Puedes sentir dolor y dolor con la palpación en la zona genital hasta que desaparezca la infección.</li>
        <li>Protuberancias rojas pequeñas o ampollas blancas diminutas.</li>
        <li>Pueden aparecer unos días o unas semanas después de la infección.</li>
        <li>Úlceras.</li>
        <li>Costras</li>
        
          
        </ul>
        <h3>Tratamiento:</h3>
        <p>
        Medicamento. El herpes genital no se puede curar. Los medicamentos antivirales (aciclovir y otros medicamentos relacionados) pueden aliviar el dolor y la molestia y ayudar a que el brote desaparezca más rápidamente. También pueden reducir la cantidad de brotes.
        </p>
        <img className="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTIyOH36BMCYvxSAVaoe_PhQ6mQg79M9H6A&usqp=CAU " />
      </div>
    </div>
  );
};
export default withRouter(Herpes);