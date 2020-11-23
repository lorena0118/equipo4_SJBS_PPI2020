import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../styles.css";


const Registro = (props) => {
  const initalState = {
    name:"",
    correo: "",
    contraseña:""
  }
  const[usuario, setUsuario] = useState(initalState)

  function handlerChange(e){
    setUsuario({...usuario, [e.target.name] : e.target.value})
  }

  function submitData(e){
    e.preventDefault()
    fetch('http://localhost:3001/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
  }

  return (
    <div className="container">
      <h1 className="center" >Crea tu cuenta</h1>
      <div className="container">

        <form onSubmit={submitData}>
          <div className="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              onChange={(e) => handlerChange(e)}
              />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Correo</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              onChange={(e) => handlerChange(e)}
              />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              onChange={(e) => handlerChange(e)}
              />
          </div>
 
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Acepto el uso de datos</label>
          </div>
          <Link to="/inicio">
          <button type="submit" className="btn btn-primary">Crear cuenta</button>
          </Link>
        </form>
        <div>
          <br/>
          <h5 className="center">
            Ingresar con:
          </h5>
        </div>
        
        <br/>
        <button type="button" class="btn btn-danger btn-lg btn-block">Google</button>

        <button type="button" class="btn btn-primary btn-lg btn-block">Facebook</button>
        

      </div>

      <br/><br/><br/>
    </div>
);
};



export default withRouter(Registro);