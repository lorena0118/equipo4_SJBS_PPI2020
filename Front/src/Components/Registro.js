import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";


const Registro = () => {
  return (
    <div>
      <Navigation/>
      <br/><br/>
      <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Nombre</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Confirmar tu contraseña</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Edad</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
          <center>
           
          </center>
      </form>
    </div>
    <div className="Container"> 
    <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
  <label className="form-check-label" for="exampleRadios1">
  Hombre
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">
    Mujer
  </label>
</div>

</div>
);
};
    <div className="Container"> 
    <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
  <label className="form-check-label" for="exampleRadios1">
  Hombre
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">
    Mujer
  </label>
</div>

</div>
);
};
    <div className="Container"> 
    <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
  <label className="form-check-label" for="exampleRadios1">
  Hombre
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">
    Mujer
  </label>
</div>

</div>
);
};
</div>
 <div className="container">
 <br />
 
 <button type="button" class="btn btn-primary btn-lg btn-block">
   Ingresar
 </button>
 <br />
 <button type="button" class="btn btn-danger btn-lg btn-block">
   Ingresar con google
 </button>
 <button type="button" class="btn btn-primary btn-lg btn-block">
   Ingresar con facebook
 </button>
</div>
);
};


);
};
export default withRouter(Registro);