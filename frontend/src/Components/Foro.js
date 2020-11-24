import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";

const Foro = () => {
  return (
    <div>
      <Navigation/>
    <main role="main">

  <section className="jumbotron text-center">
    <div className="container">
      <h1>¿Tú que opinas?</h1>
      <p className="lead text-muted">Un pequeño espacio para que expreses lo que piensas con respetoa algún tema plantado. Ó crea tu foro y compartelo con tus amigos. </p>
      <p>
        <Link to="/CrearForo" className="btn btn-primary my-2">Crear Foro</Link>
        
      </p>
    </div>
  </section>

  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
              <p className="card-text">Descripción del foro aquí.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Compartir</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Ingresar</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

</main>
</div>
  );
};
export default withRouter(Foro);